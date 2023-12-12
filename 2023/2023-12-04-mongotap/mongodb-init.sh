#!/bin/bash

# Add logging to the script
echo "$(date) Running health check" >> /var/log/mongodb-healthcheck.log

# Mongo host and credentials
HOST=localhost
PORT=27017
USER=root
PASSWORD=pass
AUTH_DB=admin

# Function to check if the replica set is initiated
checkReplicaSet() {
  docker exec -it mongodb sh -c "echo 'rs.status()' | mongo --quiet -u $USER -p $PASSWORD --authenticationDatabase $AUTH_DB | grep -q 'setName'"
}

# Initialize the replica set if not already done
if ! checkReplicaSet; then
  docker exec -it mongodb sh -c "echo 'rs.initiate()' | mongo --quiet -u $USER -p $PASSWORD --authenticationDatabase $AUTH_DB"
  
  # Docker will cause the replica set will use some internal address for the single
  # member (at least on my MacBook), so you need to override that with "localhost".
  docker exec -it mongodb sh -c "echo 'var cfg = rs.config(); cfg.members[0].host = \"localhost:27017\"; rs.reconfig(cfg);' | mongo --quiet -u $USER -p $PASSWORD --authenticationDatabase $AUTH_DB"
fi
