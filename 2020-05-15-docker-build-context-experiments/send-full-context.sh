#!/bin/bash

# 44.54kB

docker build . -t context-test -f app1/Dockerfile-app1
docker run --rm context-test ls -R /src