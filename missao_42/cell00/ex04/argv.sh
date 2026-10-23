#!/bin/bash

if [ "$#" -eq 0 ]; then
	echo "No arguments supplied"
else
	c=0
	for i in "$@"; do
		if [ "$c" -eq 3 ]; then
			break
		fi
		echo  "$i"
		c=$((c+1))
	done
fi

#c=0
#while [ "$c" -lt 3 ]; do
#	echo "$c"
#	c=$((c+1#))
#done

#echo "$@"

