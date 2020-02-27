#!/bin/bash

docker pull php:7.4-fpm

docker build -t phpforkatas:latest .

./php.sh composer require phpunit/phpunit --dev

