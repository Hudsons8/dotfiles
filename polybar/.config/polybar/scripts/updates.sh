#!/usr/bin/env bash

UPDATES=$(checkupdates 2>/dev/null | wc -l) 
if (( UPDATES == 1 )); then
    echo " $UPDATES Update"
elif (( UPDATES > 1 )); then
    echo " $UPDATES Updates"
else
    echo "Up to date!"
fi
