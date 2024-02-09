#!/bin/sh
set -e

rm -rf ./node_modules/@types/istanbul-reports/node_modules/@types/istanbul-lib-report

tsc

for file in ./dist/exports.*; do mv "$file" "${file/exports/index}"; done