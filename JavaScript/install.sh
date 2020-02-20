#!/bin/bash

docker pull node:lts

docker build -t nodeforkatas:latest .

rm -rf node_modules
rm -rf yarn.lock

docker run -it --rm --name node -v "$PWD":/usr/src/app -w /usr/src/app nodeforkatas yarn add \
    @babel/core \
    @babel/preset-env \
    @babel/preset-typescript \
    babel-loader \
    css-loader \
    jest \
    style-loader \
    ts-loader \
    typescript \
    webpack \
    webpack-cli
