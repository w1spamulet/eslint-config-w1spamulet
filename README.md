# ESlint and Prettier Config with `@typescript-eslint/parser` from @w1spamulet

## Install

**DO NOT** install it globally since we are using `ESlint v6`

> Check this [ESlint - migrating to 6.0](https://eslint.org/docs/user-guide/migrating-to-6.0.0#package-loading-simplification)

1. Make sure you have `package.json` file in your directory, or create a new one `npm init`

2. Install this package and its peer dependencies

   ```sh
   npx install-peerdeps --dev eslint-config-w1spamulet
   ```

3. Create a `.eslintrc.js` file at the same folder as `package.json`

   ```js
   module.exports = {
     extends: ['w1spamulet'],
   };
   ```

## Options

1. Add script to your `package.json` so your can manually lint via command

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
  extends: ['w1spamulet'],
  rules: {
    // your rules
    'no-console': 1,
  },
  // sometimes you need to override rules according to file type, for example:
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-unused-vars': 0, // you don't want to see two rules saying the same thing
        'react/prop-types': 0, // you can use interface or type in .tsx
      },
    },
    {
      files: ['*.js', '*.jsx'],
      rules: {
        '@typescript-eslint/no-unused-vars': 0,
      },
    },
  ],
};
```
