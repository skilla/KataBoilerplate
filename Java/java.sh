#!/bin/bash

docker run -it --rm --name java4katas -v "$PWD":"/usr/src/project" -v "$HOME/.m2":"/root/.m2" -w "/usr/src/project" mavenforkatas java "$1" "$2" "$3" "$4" "$5" "$6" "$7" "$8" "$9"
