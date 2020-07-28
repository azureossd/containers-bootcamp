FROM node:12.18

RUN mkdir /app

WORKDIR /app

RUN apt-get update && apt-get install -y openssh-server && echo "root:Docker!" | chpasswd 

ADD package.json .

RUN npm install

COPY sshd_config /etc/ssh/

COPY entrypoint.sh /usr/local/bin/

RUN chmod +x /usr/local/bin/entrypoint.sh

COPY . .

EXPOSE 3000 2222

ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
