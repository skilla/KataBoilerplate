#!/bin/bash

docker run -it --rm --name php4Katas -v "$PWD":/var/www/html -w /var/www/html -p 8080:80 phpforkatas $1 $2 $3 $4 $5 $6 $7 $8 $9
