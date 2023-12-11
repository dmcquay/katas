# Initialize python virtualenv

Set up new env and install deps:

```
python3 -m venv ~/.virtualenvs/tap-mongodb
source ~/.virtualenvs/tap-mongodb/bin/activate
pip install -U pip setuptools
pip install tap-mongodb
```

Or just activate if you already did this once:

```
source ~/.virtualenvs/tap-mongodb/bin/activate
```

# Initializing the DB

```
./generate-keyfile.sh
docker compose up -d
docker exec -it mongodb mongo -u root -p pass --authenticationDatabase admin
rs.initiate()

// replica set will use some internal address for the single
// member, so you need to override that with "localhost"
var cfg = rs.config();
cfg.members[0].host = "localhost:27017";
rs.reconfig(cfg);
```

# Insert some data

```sh
python3 create-posts.py
```

# Do a full sync

```sh
./sync-full
```

# Do a log-based sync

```sh
./sync-log
```

# Reproduce the timeout

- In `sync-log`, comment out the state paramenter
- Run `./sync-log`
- Save the final state output to `state.json`
- Uncomment the state parameter in `sync-log`
- Create a few hundred posts with `python3 create-posts.py`. Each post had 500 elements in the items array and all strings were 500 characters.
- Ryn `./sync-log | python3 slow-consumer.py`
- Will time out in ~40 mins (I might be able to reproduce more quickly with some tweaks)

Key elements required to cause the timeout:

- MongoDB is being run as a replica set with 1 node so that the oplog is enabled
- MongoDB is being run with auth enabled because tap-mongodb doesn't work otherwise
- I'm setting localLogicalSessionTimeoutMinutes to 1 to ensure it times out quickly (which is why I think I can make it time out faster than 40 mins)
- I'm pipeing the output into slow-consumer.py which reads stdin very slowly. This causes the 64KB pipe buffer to fill up quickly which
  causes the tap's writes (technically the flush call) to block, which ultimaly is what leads to the timeout.

Attempts to reproduce error more quickly (all with 400 small records to be synced):

- Reduced the sleep in slow-consumer.py from 5 seconds to 1 second. Result: Synced in 631 seconds (10.5 minutes) without error
- Sleep on the 100th line for 2 minutes. Don't sleep at all for other lines. Result: No error
- Sleep on the 100th line for 41 minutes. Don't sleep at all for other lines. Result: No error

Perhaps the size of the elements matters because we need to fill up the pipe buffer.

pymongo.errors.CursorNotFound: cursor id 4419459813332238502 not found, full error: {'operationTime': Timestamp(1701842393, 1), 'ok': 0.0, 'errmsg': 'cursor id 4419459813332238502 not found', 'code': 43, 'codeName': 'CursorNotFound', '$clusterTime': {'clusterTime': Timestamp(1701842393, 1), 'signature': {'hash': b'DN\xf0\xb2S\x04$y\x12^\xa5\xe0>\x81\x8e\xc8\x10\x89\x9a\xc5', 'keyId': 7309345304778637317}}}

mongodb  | {"t":{"$date":"2023-12-06T05:27:16.086+00:00"},"s":"I",  "c":"QUERY",    "id":20528,   "ctx":"LogicalSessionCacheRefresh","msg":"Killing cursor as part of killing
 session(s)","attr":{"cursorId":4419459813332238502}}

Last record successfully extracted at 2023-12-06T05:18:54.394493Z

## Testing how much delay is required to trigger the session timeout

### Experiment #1 - Doc size: 0.24 MB

Environment properties:

- 1900 documents
- String len: 500
- items size: 500
- Doc size: 0.24 MB

Number in left col is the number of minutes the slow consumer paused on the 100th line of input.
Yes means the session timeout was reproduced.
No means the session timeout was not reproduced (extraction completed successfully).

41  Yes
12  Yes
10  Yes
8   Yes Yes Yes Yes
7.9 Yes Yes No
7.8 Yes No
7.7 No
7   No
6   No
4   No
2   No
1   No

### Experiment #2 - Doc size: 2.39 MB

Environment properties:

- 298 documents
- String len: 5000
- items size: 500
- Doc size: 2.39 MB

Number in left col is the number of minutes the slow consumer paused on the 50th line of input.
Yes means the session timeout was reproduced.
No means the session timeout was not reproduced (extraction completed successfully).

9 Yes
8 No No

### Experiment #3 - Updates to many large documents

- 938 documents
- 2.39 MB each (500 items of 500 char strings)
- Added one 500 length string to each

10 Yes
5  No

## Hypothesis

While iterating through sending the documents to stitch/pg, stitch/pg consumes slower than tap-mongodb is writing.

This causes the pipe buffer between the processes to fill up (estimated 64KB) if stitch/pg is sufficiently slow
and there is enough data being synced (if total data to be synced is less than 16 KB or whatever Stitch's pipe
limit is set to) then the pipe will not get full.

When the pipe is full, then then next call to flush (called by stitch.write_message) will block until a record
finishes being sent to stitch api.

I'll refer to the "effective session timeout" as the actual session timeout plus however long until a mongo background thread cleans
up the session.

If a single record takes longer than the effective session timeout, then the next time a cursor from that session
is used, it will fail because the cursor won't be found. In theory, it seems most likely that this would happen in the

When processing a large number of updates to large documents, the inner loop will not be as likely to fail because
the documents being fetched from the source collection are so large (3-10MB) that only a small number will fit into a
single fetch batch (max 16 MB). In order to hit a timeout there, it would have to take > 30 minutes to process just a
few documents.

However, with update operations, the oplog entries will be small (just the push operation and the new lineItems). Therefore
a single batch will contain main ops. Maybe this is not relevant because in each outer loop, there will be calls to fetch
the documents from the source collection which will refresh the session.

# Optional: Connect to DB

```
docker exec -it mongodb mongo -u root -p pass --authenticationDatabase admin
```

Or use this connection string to connect using compass, etc.

`mongodb://root:pass@localhost:27017/?replicaSet=rs0&authSource=admin`

The oplog is found in local > oplog.rs.

# Optional: Regenerate the catalog

```sh
./discover
```

Then edit `catalog.json` and add the following to the metadata for any collections that should be included:

```json
"selected": true,
"replication-method": "FULL_TABLE"
```

Then clone as `catalog-log.json` and change `replication-method` to `LOG_BASED`.

# Optional: Check the session timeout

```mongosh
db.adminCommand({ getParameter: 1, localLogicalSessionTimeoutMinutes: 1 })
```

# Optional: Edit tap-mongodb sources

`/Users/dustin.mcquay/.virtualenvs/tap-mongodb/lib/python3.11/site-packages/tap_mongodb`

# See Also

- https://github.com/singer-io/tap-mongodb