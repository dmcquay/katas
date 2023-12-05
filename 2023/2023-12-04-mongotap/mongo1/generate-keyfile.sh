#!/bin/bash

openssl rand -base64 756 > mongodb-keyfile
chmod 400 mongodb-keyfile