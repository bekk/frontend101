#!/bin/bash
npm install

SQLITE_PATH=$(pwd)/jsbin.sqlite

JSBIN_API_ALLOWANONYMOUSREADWRITE=true \
  JSBIN_STORE_SQLITE_LOCATION=$SQLITE_PATH \
  `npm bin`/jsbin
