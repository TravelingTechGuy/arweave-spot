# Precious Metals Spot Price

The app shows current spot prices of 5 precious metals. It supports manual and automatic refresh.

## Installation

1. Clone the repo:
1. `cd arweave-spot && yarn install`. If you don't use `yarn`, `npm install` would do.
1. `yarn start` to start serving on localhost.

## Deploying to the permaweb
1. `yarn build` to build the app.
1. `arweave deploy build/index.html --key-file path/to/arweave-key.json --package`
1. Read the official [Arweave deploy documentation](https://docs.arweave.org/developers/tools/arweave-deploy) for more options and troubleshooting
