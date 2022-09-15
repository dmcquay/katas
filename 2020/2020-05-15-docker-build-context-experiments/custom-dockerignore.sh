#!/bin/bash

# 2B (Really, just two bytes? Do I need to learn more about Docker BuildKit?)

DOCKER_BUILDKIT=1 docker build . -t context-test -f app1/Dockerfile-app1
docker run --rm context-test ls -R /src