#!/bin/bash

VENV_DIR=~/.virtualenvs/tap-mongodb-timeout-repro

if command -v python3 &>/dev/null; then
    echo "Python 3 is installed."
else
    echo "Python 3 is not installed. Please install Python 3."
    exit 1
fi

if [ -d "$VENV_DIR" ]; then
    echo "Virtual Env found. Activating."
    source $VENV_DIR/bin/activate
else
    echo "Virtual Env file not found. Initializing."
    python3 -m venv $VENV_DIR
    source $VENV_DIR/bin/activate
    pip install -U pip setuptools
    pip install tap-mongodb==3.0.2
fi

docker compose down --volumes
docker compose up -d
sleep 5
./mongodb-init.sh
echo "Inserting posts"
python3 create-posts.py
echo "Initializing tap-mongodb and storing state after inserts"
tap-mongodb --config config.json --catalog catalog-log.json 2>/dev/null | grep 'STATE' | tail -n 1 | jq '.value' > state-after-inserts.json
echo "Editing posts"
python3 edit-posts.py
echo "Done"