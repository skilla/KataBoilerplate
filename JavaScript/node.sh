#!/bin/bash

docker run -it --rm --name node -v "$PWD":/usr/src/app -w /usr/src/app nodeforkatas $1 $2 $3 $4 $5 $6 $7 $8 $9
