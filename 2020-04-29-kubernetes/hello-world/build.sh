#!/bin/bash

docker build . -t hello-world:`date +"%m-%d-%y-%H-%I-%S"`
