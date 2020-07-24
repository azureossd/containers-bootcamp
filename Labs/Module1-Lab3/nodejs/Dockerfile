FROM node:12.18

WORKDIR /home/site/wwwwroot

ADD package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "node", "server.js" ]
