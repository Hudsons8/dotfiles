#! /bin/bash
export _JAVA_AWT_WM_NONREPARENTING=1
nitrogen --restore
setxkbmap -layout gb
xset r rate 200 70
dunst &
compton &
exec i3
