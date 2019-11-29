# [Precious Metals Spot Price](https://p7aucde3ks72.arweave.net/ygBvjmZ4Hh8zuh2S1wzchS8stYrJljE6BWdZCaxut08)

The app shows the current spot prices of 5 precious metals. It supports manual and automatic refresh.  

Currrently, [deployed to the Permaweb](https://p7aucde3ks72.arweave.net/ygBvjmZ4Hh8zuh2S1wzchS8stYrJljE6BWdZCaxut08).

If you'd like me to add more features, open a feature request issue.

## Installation

1. Clone the repo: `git clone https://github.com/TravelingTechGuy/arweave-spot.git`.
1. `cd arweave-spot && yarn install`. (If you don't use `yarn`, `npm install` would do).
1. `yarn start` (or `npm start`) to start serving on localhost.

## Deploying to the Permaweb

1. Make sure you have `arweave-deploy` installed (`npm install -g arweave-deploy`).
1. `yarn build` (or `npm run build`) to build the app.
1. `arweave deploy build/index.html --key-file path/to/arweave-key.json --package`.
1. Read the official [Arweave deploy documentation](https://docs.arweave.org/developers/tools/arweave-deploy) for more options and troubleshooting.

## Data Service

The data is taken from a service I wrote, and deployed to Netlify. I'll maintain it for the forseeable future. If not, a different service can easily be substituted in.

## Tips 💁

***AR address:*** `c7xt-ZuDJak17bJSkCr56r9kpGyZUkY3CRhY0uVB0dU`  
***ETH address:*** `0x08c05f41D2Bb4c8E840dfac4C0aBFA7A6524B94C`  
***BAT:*** use the Brave browser to send a tip  

## License

**MIT.**
