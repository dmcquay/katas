#!/bin/bash

# 4.096kB

mkdir tmp_context
cp -r app1 tmp_context/.
cp -r shared tmp_context/.
cd tmp_context
docker build . -t context-test -f app1/Dockerfile-app1
cd ..
rm -rf tmp_context

docker run --rm context-test ls -R /src