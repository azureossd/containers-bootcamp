FROM node:12.18

WORKDIR /home/site/wwwwroot

RUN apt-get update && apt-get install -y openssh-server && echo "root:Docker!" | chpasswd 

ADD package.json .

COPY sshd_config /etc/ssh/

COPY entrypoint.sh /usr/local/bin/

RUN npm install

COPY . .

EXPOSE 3000 2222

ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
