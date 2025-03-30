#!/bin/bash

# TODO: after execution chmod +x create_dirs.sh
# TODO: ./create_dirs.sh to run

# Loop from 1 to 28
for i in {1..28}
do
  # Create the directory
  mkdir "day$i"
  
  # Create the two files inside the directory
  touch "day$i/day_$i.ts"
  touch "day$i/day_$i.test.ts"
done

echo "Directories and files created successfully!"