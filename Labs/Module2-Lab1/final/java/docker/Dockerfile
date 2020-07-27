FROM openjdk:11.0.8-jre

WORKDIR /home/site/wwwroot

COPY helloworld.jar .

EXPOSE 8080

ENTRYPOINT ["java","-jar","helloworld.jar"]