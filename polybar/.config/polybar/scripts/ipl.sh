#!/bin/bash

case "$1" in
    --tun0)
         printf ifconfig tun0 | grep 'inet ' | awk '{ print $2 }'
        ;;
    --eno2)
         printf ifconfig eno2 | grep 'inet ' | awk '{ print $2 }'
        ;;

    *)
         printf ifconfig wlo1 | grep 'inet ' | awk '{ print $2 }'
        ;;
esac

