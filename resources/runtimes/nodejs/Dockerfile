FROM node:25.8

RUN mkdir /app

WORKDIR /app

ADD package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "node", "server.js" ]
