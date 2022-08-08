#!/bin/bash

sh ./build-ksql.sh src .

exec /etc/confluent/docker/run "$@"
