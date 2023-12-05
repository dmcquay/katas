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

# replica set will use some internal address for the single
# member, so you need to override that with "localhost"
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

# See Also

- https://github.com/singer-io/tap-mongodb