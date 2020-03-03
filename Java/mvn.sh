#!/bin/bash

docker run -it --rm --name maven4katas -v "$PWD":"/usr/src/project" -v "$HOME/.m2":"/root/.m2" -w "/usr/src/project" mavenforkatas mvn $1 $1 $3 $4 $5 $6 $7 $8 $9
