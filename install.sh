#!/bin/sh

mkdir -p ~/.local/share/themes/
ln -s $(pwd) ~/.local/share/themes/greenfield
gsettings set org.gnome.desktop.interface gtk-theme greenfield

