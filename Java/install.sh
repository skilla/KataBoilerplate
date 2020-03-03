#!/bin/bash

docker pull tomcat:9-jdk11

docker build -t javaforkatas:latest -f DockerfileTomcat .

docker pull maven:3-jdk-11

docker build -t mavenforkatas:latest -f DockerfileMaven .

#docker run -it --rm --name java4katas -v "$PWD":/usr/src/app -w /usr/src/app nodeforkatas yarn add 
