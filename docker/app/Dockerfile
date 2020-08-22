FROM php:7.4-fpm-buster

ENV COMPOSER_ALLOW_SUPERUSER=1

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

RUN apt-get update \
  && apt-get -y install git libicu-dev libonig-dev libzip-dev unzip locales \
  && apt-get clean

RUN git clone https://github.com/phpredis/phpredis.git /usr/src/php/ext/redis

RUN docker-php-ext-install intl pdo_mysql mbstring zip bcmath redis

COPY ./zzz-www.conf /usr/local/etc/php-fpm.d/zzz-www.conf

WORKDIR /var/www/app
