#!/bin/bash

# Find all .js files and rename them to .ts
find . -type f -name "*.js" -exec bash -c 'mv "$0" "${0%.js}.ts"' {} \;

echo "Renaming complete."