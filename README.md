# fortnite-api-io-updated

[![npm version](https://flat.badgen.net/npm/v/fortnite-api-io)](https://www.npmjs.com/package/fortnite-api-io)

A fork from the fortnite-api-io module with last endpoints versions.

Simple Wrapper Module for making API calls to https://fortniteapi.io.

Go to the [API Docs](https://fortniteapi.io/) to register for an account and to get an API key.


## Install the Module
```bash
npm install fortnite-api-io-v2
```

## Require and Instantiate
```js
const FortniteAPI = require("fortnite-api-io-v2");

// Instantiate with API Credentials
const client = new FortniteAPI("credentials-go-here", {
    defaultLanguage: 'en', // Optional - will default to 'en'
    ignoreWarnings: false // Optional -will default to false
});
```

## Example API Calls
The API is currently transitioning into its second version. Where available, it is highly recommended to use the version 2 endpoint.

```js
// Get the next upcoming items
const upcomingItems = await client.listItems();

// Get this season's challenges
const challenges = await client.listChallenges("current");

// Get all stats for a specific loot/weapon item
const loot = await client.getLootDetails();
```

## Acknowledgement
Thanks to the devs of https://fortniteapi.io, do consider subscribing on their API Dashboard to support the project and its costs.

## License
MIT