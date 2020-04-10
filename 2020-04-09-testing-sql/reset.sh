#!/bin/bash
set -e

# docker
docker-compose down --remove-orphans
docker-compose up -d

# wait for postgres
echo "Waiting for postgres to be ready..."
until docker-compose exec -e PGPASSWORD=password db psql -U app -d postgres -c 'SELECT 1;' &> /dev/null; do sleep 1; done

# set up db
echo "Initializing database..."
cat schema.sql | docker-compose exec -e PGPASSWORD=password -T db psql -U app test