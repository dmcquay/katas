#!/bin/bash

# 10.24kB

tar c app1 shared | docker build - -t context-test -f app1/Dockerfile-app1
docker run --rm context-test ls -R /src