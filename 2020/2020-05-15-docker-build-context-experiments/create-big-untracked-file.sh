#!/bin/bash

rm -rf app1/bigfile
dd if=/dev/random of=app1/bigfile count=50000 bs=1024