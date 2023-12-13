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

It will take around 20 minutes, but eventually you will get a missing cursor error. Copy the id of the cursor, then search for it in the mongo logs with `docker compose logs | grep [cursorId]` and you will see the full history of this cursor. First you'll see a find call, possibly a getMore call (fetching a second batch), then a notice about the session/cursor being killed and finally an error about a query trying to use that cursor but the cursor was not found.

## Applying the patch

```sh
./run-patched.sh
```

This script will apply a patch and then run the script again. This time it will work due to the patch.

Here are the changes from the patched oplog.py file:

Create an explicit session.

```py
with client.start_session() as session:
```

Then modify the oplog find query by passing the session. Also, pass no_cursor_timeout=True while you're at it.

```py
with client.local.oplog.rs.find(
        oplog_query,
        sort=[('$natural', pymongo.ASCENDING)],
        oplog_replay=oplog_replay,
        session=session,
        no_cursor_timeout=True
) as cursor:
```

In the oplog cursor loop, periodically run a lightweight query to keep the session alive:

```py
client.local.command('ping', session=session)
```

If you want/need to put the original file back:

```sh
cp ./oplog-original.py ~/.virtualenvs/tap-mongodb-timeout-repro/lib/python3.*/site-packages/tap_mongodb/sync_strategies/oplog.py
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