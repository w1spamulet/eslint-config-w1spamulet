# ESlint and Prettier Config with `@typescript-eslint/parser` from WispAmulet

## Installing

**DO NOT** install it globally since we are using `ESlint v6`

> Check this [ESlint - migrating to 6.0](https://eslint.org/docs/user-guide/migrating-to-6.0.0#package-loading-simplification)

1. Make sure you have `package.json` file in your directory, or create a new one `npm init`

2. Install this package and its peer dependencies

   ```sh
   npx install-peerdeps --dev eslint-config-wispamulet
   ```

3. Create a `.eslintrc.js` file at the same folder as `package.json`

   ```js
   module.exports = {
     extends: ['wispamulet']
   };
   ```

## Options

1. Add script to your `package.json` so your can manually lint via CLI `npm run lint`

   ```json
   "scripts": {
     "lint": "eslint .",
     "lint:fix": "eslint --fix"
   },
   ```

## Settings

Override the default rules like this

```js
module.exports = {
  extends: ['wispamulet'],
  rules: {
    // your rules
    'no-console': 2
  }
};
```
