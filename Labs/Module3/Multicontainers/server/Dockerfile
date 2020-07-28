FROM node:12.8
RUN mkdir /server
WORKDIR /server
COPY package.json /server/
RUN npm install
COPY . .

# ssh
ENV SSH_PASSWD "root:Docker!"
RUN apt-get update \
        && apt-get install -y openssh-server \
	    && echo "$SSH_PASSWD" | chpasswd 

COPY sshd_config /etc/ssh/
COPY entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/entrypoint.sh

EXPOSE 3001 2222
ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]