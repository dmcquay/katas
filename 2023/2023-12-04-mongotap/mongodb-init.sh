#!/bin/bash

# Mongo host and credentials
HOST=localhost
PORT=27017
USER=root
PASSWORD=pass
AUTH_DB=admin

docker exec -it mongodb sh -c "echo 'rs.initiate()' | mongo --quiet -u $USER -p $PASSWORD --authenticationDatabase $AUTH_DB"

# Docker will cause the replica set will use some internal address for the single
# member (at least on my MacBook), so you need to override that with "localhost".
docker exec -it mongodb sh -c "echo 'var cfg = rs.config(); cfg.members[0].host = \"localhost:27017\"; rs.reconfig(cfg);' | mongo --quiet -u $USER -p $PASSWORD --authenticationDatabase $AUTH_DB"

# Enable additional logging so we can observe getMore calls and batch sizes
docker exec -it mongodb sh -c "echo 'db.setProfilingLevel(0,-1)' | mongo --quiet -u $USER -p $PASSWORD --authenticationDatabase $AUTH_DB"
