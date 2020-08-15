#!/bin/bash

API_TOKEN=510f121e6dd173cf1461a7cd9fa863

# curl -X -d '{"data":{}}' http://localhost:8080/api/collections/save/playbooks?token=$API_TOKEN

curl http://localhost:8080/api/collections/get/playbooks?token=$API_TOKEN