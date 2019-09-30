#! /bin/bash
nitrogen --restore
setxkbmap -layout gb
dunst &
compton &
exec i3
