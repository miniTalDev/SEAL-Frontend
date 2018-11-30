#!/bin/bash
echo "1.Path update"
echo "2.Minor update"
echo "3.Major update"
set userchoice = read -p "Please choose option that you want to update."

if [ "$userchoice" -eq 1 ];
then
    apv update patch
elif [ "$userchoice" -eq 2 ];
then
    apv update minor
elif [ "$userchoice" -eq 3 ];
then
    apv update major
else
    echo "Please try again..."
    exit 0
fi
