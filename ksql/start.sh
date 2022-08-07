#!/bin/bash

sh ./build-ksql.sh src .

exec /usr/bin/docker/run "$@"
