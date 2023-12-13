# What is this?

The purpose of this repo is to reproduce a cursor/session timeout issue that can happen with tap-mongodb.

# Initial Setup

Just run `./init.sh`. It sets up all the specific state needed to reproduce this error, such as:

- Installing dependencies
- Running mongo locally with oplog + auth enabled
- Inserting enough documents to trigger the error scenario
- Updating all those documents to trigger the error in an update scenario
- Capturing the correct tap-mongodb state file for the scenario

## Reproducing the cursor/session timeout

```
./run-broken.sh
```

It will take around 13 minutes, but eventually you will get a missing cursor error. Copy the id of the cursor, then search for it in the mongo logs with `docker compose logs | grep [cursorId]` and you will see the full history of this cursor. First you'll see a find call, possibly a getMore call (fetching a second batch), then a notice about the session/cursor being killed and finally an error about a query trying to use that cursor but the cursor was not found.

## Applying the patch

```sh
./run-patched.sh
```

This script will apply a patch and then run the script again. This time it will work due to the patch.

Here are the changes from the patched oplog.py file:

If you want/need to put the original file back:

```sh
cp ./oplog-original.py ~/.virtualenvs/tap-mongodb-timeout-repro/lib/python3.*/site-packages/tap_mongodb/sync_strategies/oplog.py
```

# Explanation of why the cursor times out

By default, a session is created for each query. Cursors belong to a session. When a session times out, the session becomes eligible for
deletion. However, there seems to be a delay until it is actually killed. I have observed this delay to be around 7-10 minutes in my local environment. I'm going to refer to this combined session timeout + delay until session is actually killed as EFFECTIVE_SESSION_TIMEOUT.

In a production environment, SESSION_TIMEOUT will typically be 30 minutes (the docs warn against changing this) plus the delay. Let's assume
around 10 minutes. So a production EFFECTIVE_SESSION_TIMEOUT is around 40 minutes give or take.

In this local project, the SESSION_TIMEOUT is set to 1 minute and the delay is around 8 minutes, so the EFFECTIVE_SESSION_TIMEOUT is ~9 mins.

When iterating on a cursor, pymongo does not communicate with the server on each iteration of the loop. Rather, it fetches data in batches.
A session is "refreshed" when the next batch is fetched. A batch_size can be set on a query. It is a document count. When specified, each
batch will contain exactly this many documents provided there are sufficient docs remaining to be fetched and provided that total batch does
not exceed 16MB. If batch_size is not specified (tap-mongodb does not specify batch_size), then the first batch will be exactly 101 docs and
all remaining batches will be a full 16 MB.

I was able to observe the actual max batch size when fetching oplog entries. I did this in a controlled environment where the oplog contained insert operations only. I inserted about a million docs. I increased logging by running `db.setProfilingLevel(0,-1)` in mongosh. I ran
tap-mongodb in log mode. I then searched the mongo logs with `dc logs | grep 'oplog' | grep 'nreturned'` where I was able to see that the
first batch was 101 and the second was 153529.

Therefore, to cause a timeout, it must take longer than EFFECTIVE_SESSION_TIMEOUT to process a batch of 153529 oplog entries (that number
may of course vary based on the size of your oplog docs, but this serves as a baseline). In my local, controlled environment, it is exactly
that number.

tap-mongodb can process 153529 oplog docs very fast, but it writes to stdout which is piped into another process. UNIX pipe buffers are
typically 16 KB and if the consumer of the pipe isn't reading as fast, it will fill up. When the pipe buffer is full, python flush calls
will block. `singer.write_message` calls flush with every print call. Therefore if the target is slow, as it can be when the source mongo
docs are huge, nested, etc and the target is having to map this to a table/columnar structure. In my production environment, this is the case.
I have emulated this in this local proof of concept with slow-cosumer.py.

# Recommended fix

We need to refresh the session periodically. There is no "refresh_session" call. We just need to call something lightweight,
such as a ping. We also need to create an explicit session which we'll pass into the oplog find call AND the ping call so
that they are using the same session or else they will each have separate sessions and the ping will not affect the find
call's session.

1. Create an explicit session.

```py
with client.start_session() as session:
```

2. Then modify the oplog find query by passing the session. Also, pass `no_cursor_timeout=True` while you're at it to ensure
   we are only limited by the session timeout (default 30 minutes) and not the cursor timeout (default 10 minutes).

```py
with client.local.oplog.rs.find(
        oplog_query,
        sort=[('$natural', pymongo.ASCENDING)],
        oplog_replay=oplog_replay,
        session=session,
        no_cursor_timeout=True
) as cursor:
```

3. In the oplog cursor loop, periodically run a lightweight query to keep the session alive. I suggest around 10 minutes. Don't
   use 29 minutes because updates get batched in tap-mongodb and if you get unlucky and the updates get flushed in that iteration
   of the loop, then it could take a while so we want to make sure our ping enough more frequently than SESSION_TIMEOUT to
   provide some head room.

```py
client.local.command('ping', session=session)
```

# Optional: Connect to DB

```
docker exec -it mongodb mongo -u root -p pass --authenticationDatabase admin
```

Or use this connection string to connect using compass, etc.

`mongodb://root:pass@localhost:27017/?replicaSet=rs0&authSource=admin`

# Optional: Regenerate the catalog

```sh
tap-mongodb --config config.json --discover > catalog.json
```

Then edit `catalog.json` and add the following to the metadata for any collections that should be included:

```json
"selected": true,
"replication-method": "FULL_TABLE"
```

Then clone as `catalog-log.json` and change `replication-method` to `LOG_BASED`.

# Optional: Check the session timeout to confirm it was set to 1 minute successfully

```mongosh
db.adminCommand({ getParameter: 1, localLogicalSessionTimeoutMinutes: 1 })
```

# Optional: Edit tap-mongodb sources

The sources are found in `~/.virtualenvs/tap-mongodb-timeout-repro/lib/python3.11/site-packages/tap_mongodb` if you want to edit
them directly to experiment with fixes, though obviously we will need to ultimatley make fixes to the tap-mongodb
repo instead.

# Optional: Regenerate the mongo keyfile

```sh
openssl rand -base64 756 > mongodb-keyfile
chmod 400 mongodb-keyfile
```

# See Also

- https://github.com/singer-io/tap-mongodb