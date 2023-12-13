#!/bin/bash

source ~/.virtualenvs/tap-mongodb-timeout-repro/bin/activate
cp ./oplog-original.py ~/.virtualenvs/tap-mongodb-timeout-repro/lib/python3.*/site-packages/tap_mongodb/sync_strategies/oplog.py
tap-mongodb --config config.json --catalog catalog-log.json --state state-before-inserts.json | python3 slow-consumer.py