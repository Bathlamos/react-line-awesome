#!/bin/sh
set -e

# Build the project
yarn start

# Lint the source
yarn run tslint --project tsconfig.json

# Prettify the output
yarn run prettier --config .prettierrc --write "**/*{.js,.ts,.jsx,.tsx,.md}"

# Add all files to output
git add dist
git add