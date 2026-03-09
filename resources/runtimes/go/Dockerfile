  
FROM golang:latest

RUN mkdir /app

WORKDIR /app

COPY . .

EXPOSE 8080

ENTRYPOINT ["go", "run", "main.go"]
