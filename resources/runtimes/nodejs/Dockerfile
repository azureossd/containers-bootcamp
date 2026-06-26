FROM node:26.4

RUN mkdir /app

WORKDIR /app

ADD package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "node", "server.js" ]
