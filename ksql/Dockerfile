FROM confluentinc/ksqldb-server:0.27.2

WORKDIR /app

USER root
RUN yum -y install findutils

COPY *.ksql ./src/
COPY build-ksql.sh ./build-ksql.sh
COPY start.sh ./start.sh

RUN chmod +x  *.sh

CMD ["/app/start.sh"]
