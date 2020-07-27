FROM openjdk:11.0.8-jre

RUN mkdir /app

WORKDIR /app

COPY helloworld.jar .

EXPOSE 8080

ENTRYPOINT ["java","-jar","helloworld.jar"]