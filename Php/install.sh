#!/bin/bash

docker pull php:7.4-fpm

docker build -t phpforkatas:latest .

docker run -it phpforkatas bash
