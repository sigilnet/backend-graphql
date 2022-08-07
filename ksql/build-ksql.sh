#!/bin/bash

SRC_DIR=$1
DIST_DIR=$2
DEPLOYMENT_ENV=${3}

if [ -z "$SRC_DIR" ]
then
  echo "Error: Please specific the source dir."
  exit
fi

if [ -z "$DIST_DIR" ]
then
  echo "Error: Please specific the output dir."
  exit
fi

if [ -d $DIST_DIR ]
then
  ls -d $SRC_DIR/* | egrep -i '.*([0-9]{6}).*.ksql$' | xargs cat > $DIST_DIR/main.ksql
  if [ -z "${DEPLOYMENT_ENV}" ]; then
    echo -e "$(cat $SRC_DIR/env.ksql)\n$(cat main.ksql)" > main.ksql
  else
    echo -e "$(cat $SRC_DIR/env.$DEPLOYMENT_ENV.ksql)\n$(cat main.ksql)" > main.ksql
  fi
else
  echo "Error: Directory $DIST_DIR does not exists."
fi
