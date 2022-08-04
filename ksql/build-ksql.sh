#!/bin/bash

SRC_DIR=$1
DIST_DIR=$2

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
else
  echo "Error: Directory $DIST_DIR does not exists."
fi
