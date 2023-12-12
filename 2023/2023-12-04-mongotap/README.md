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
./repro.sh
```

In approximatly 11.5 minutes, you will get a missing cursor error. Copy the id of the cursor, then search for it in the mongo logs with `docker compose logs | grep [cursorId]` and you will see a correlating error indicating that it was actually the session that timed out which caused the cursor to be deleted.

## Applying the patch

```sh
cp ./oplog-patched.py ~/.virtualenvs/tap-mongodb-timeout-repro/lib/python3.*/site-packages/tap_mongodb/sync_strategies/oplog.py
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