FROM php:7.4-apache

RUN apt-get update && apt-get install -y \
    git \
    unzip \
    libzip-dev \
    libxml2-dev \
    && docker-php-ext-install zip \
    && docker-php-ext-install soap \
    && docker-php-ext-install pcntl \
    && pecl install xdebug \
    && docker-php-ext-enable xdebug \
    && pecl install uopz \
    && docker-php-ext-enable uopz \
    && pecl install pcov \
    && docker-php-ext-enable pcov

ENV APACHE_DOCUMENT_ROOT /var/www/html/public

RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/*.conf
RUN sed -ri -e 's!/var/www/!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf


RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
#RUN php -r "if (hash_file('sha384', 'composer-setup.php') === 'e0012edf3e80b6978849f5eff0d4b4e4c79ff1609dd1e613307e16318854d24ae64f26d17af3ef0bf7cfb710ca74755a') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
RUN php composer-setup.php --install-dir=/bin --filename=composer
RUN php -r "unlink('composer-setup.php');"
RUN composer config --global --auth github-oauth.github.com `echo -n "cacf2f5148df112a3f27" && echo -n "38078db0c5e44e4daa5a"`

EXPOSE 80
