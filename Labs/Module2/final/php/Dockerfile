FROM php:8.5-apache

WORKDIR /var/www/html/

COPY /code/ .

RUN apt update
RUN apt install -y git zip unzip
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

RUN composer install

EXPOSE 80

