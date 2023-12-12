#!/bin/bash

echo "This script will consume slowly enough to trigger the cursor not found error. It will take approximately 11.5 minutes."
source ~/.virtualenvs/tap-mongodb-timeout-repro/bin/activate
tap-mongodb --config config.json --catalog catalog-log.json --state state-after-inserts.json | python3 slow-consumer.py