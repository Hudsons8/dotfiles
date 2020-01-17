#! /bin/bash
export _JAVA_AWT_WM_NONREPARENTING=1
export QT_QPA_PLATFORMTHEME=qt5ct
nitrogen --restore
setxkbmap -layout gb
xset r rate 200 70
dunst &
picom &
exec i3
#set_screens &
#exec startdwm
