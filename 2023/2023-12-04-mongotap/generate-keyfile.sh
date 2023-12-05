#!/bin/bash

# Generate a random 1024-byte key and save it to mongo-keyfile
openssl rand -base64 756 > /opt/keyfile/mongo-keyfile

# Set the keyfile permissions to 400 and change the owner
chmod 400 /opt/keyfile/mongo-keyfile
chown mongodb:mongodb /opt/keyfile/mongo-keyfile