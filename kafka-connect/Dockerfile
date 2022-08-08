FROM confluentinc/cp-kafka-connect:6.1.7

WORKDIR /app

USER root
RUN yum -y install findutils unzip

RUN wget https://github.com/mongodb/mongo-kafka/releases/download/r1.7.0/mongodb-kafka-connect-mongodb-1.7.0.zip

RUN unzip mongodb-kafka-connect-mongodb-1.7.0.zip
RUN rm -f mongodb-kafka-connect-mongodb-1.7.0.zip
RUN mkdir plugins
RUN mv mongodb-kafka-connect-mongodb-1.7.0 plugins/mongodb-kafka-connect-mongodb
