SRC_DIR=./ksql
DIST_DIR=$1

if [ -z "$DIST_DIR" ]
then
  echo "Error: Please specific the output dir."
  exit
fi

if [ -d $DIST_DIR ]
then
  ls -d $SRC_DIR/* | egrep -i '.*(\d{6}).*.ksql' | xargs cat > $DIST_DIR/all.ksql
else
  echo "Error: Directory $DIST_DIR does not exists."
fi
