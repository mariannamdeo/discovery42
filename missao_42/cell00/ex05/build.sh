#!/bin/bash


if [ "$#" -eq 0 ]; then
	echo "No arguments supplied"
else
	for pasta in "$@"; do
        mkdir "ex$pasta"
	done 
fi

#for pasta in "$@"; do
#	mkdir "ex$pasta"
#done 
