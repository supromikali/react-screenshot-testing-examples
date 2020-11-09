### Jest Screenshot Testing Example

This repo is an example of using react-screenshot-test and jest-image-snapshot testing libs. 

The way to run tests is best described in the Github Actions workflow file:

```
name: Screenshot Tests

on:
  pull_request:
    branches:
      - main

jobs:
  screenshot:
    name: Main Page
    runs-on: ubuntu-16.04
    timeout-minutes: 5
    steps:
      - uses: actions/checkout@v2

      - name: Use Node.js
        uses: actions/setup-node@v1
        with:
          node-version: "12"

      - name: Install Dependencies
        run: yarn

      - name: Jest Image Snapshot
        run: yarn test:jest-image-snapshot

      - name: React Screenshot Test
        run: yarn test:react-screenshot-test
```
