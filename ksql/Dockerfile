FROM confluentinc/ksqldb-server:0.27.2

WORKDIR /app

USER root
RUN yum -y install findutils

COPY *.ksql ./src/

COPY build-ksql.sh ./build-ksql.sh
RUN sh ./build-ksql.sh src .
RUN rm -rf ./src
RUN rm ./build-ksql.sh
