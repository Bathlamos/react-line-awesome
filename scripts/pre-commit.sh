#!/bin/sh
set -e

# Lint the source
yarn run tslint --project tsconfig.json

# Build the project
yarn start

# Prettify the output
yarn run prettier --config .prettierrc --write "**/*{.js,.ts,.jsx,.tsx,.md}"

# Add all files to output
git add