```
docker compose up -d
docker exec -it mongodb mongo -u root -p pass --authenticationDatabase admin
rs.initiate()

# replica set will use some internal address for the single
# member, so you need to override that with "localhost"
var cfg = rs.config();
cfg.members[0].host = "localhost:27017";
rs.reconfig(cfg);
```

Use this connection string:
mongodb://root:pass@localhost:27017/?replicaSet=rs0&authSource=admin

# Connect to DB

```
docker exec -it mongodb mongo -u root -p pass --authenticationDatabase admin
```

# List entries in oplog

```
use local
db.oplog.rs.find().limit(10)
```