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

Those logs were from a 41 minute sleep.
Also reproduced with 12 mins and 10 mins and 8 mins.
1 min and 2 min and 4 min and 6 min failed to repro.

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