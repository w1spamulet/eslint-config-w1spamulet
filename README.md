# README

This is my settings for ESlint and Prettier using `@typescript-eslint/parser` to lint and auto fix `.js .ts .tsx` files

## Install

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
     extends: ['wispamulet'],
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

2. With VSCode, you can install ESLint and Prettier extension in marketplace

   ```json
   // settings.json
   "files.autoSave": "off",
   "files.trimTrailingWhitespace": true,
   // format a file when save, e.g. ctrl + s
   "editor.formatOnSave": true,
   // disable the default formatter for .js .jsx .ts .tsx files
   "[javascript]": {
    "editor.formatOnSave": false
   },
   "[javascriptreact]": {
    "editor.formatOnSave": false
   },
   "[typescript]": {
     "editor.formatOnSave": false
   },
   "[typescriptreact]": {
     "editor.formatOnSave": false
   },
   // tell the ESLint plugin to auto fix on save
   "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
   },
   // disable Prettier extension for .js .jsx .ts .tsx files
   // because we are using EsLint's prettier plugin to auto format
   // we don't want VSCode's Prettier extension format these files at the same time
   // and Prettier will still work with other languages as usual
   "prettier.disableLanguages": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
   ],
   ```

## Settings

You can add rules or override default rules like this

```js
module.exports = {
  extends: ['wispamulet'],
  rules: {
    // your rules
    'no-console': 1,
    'prettier/prettier': [
      2,
      {
        trailingComma: 'es5',
        singleQuote: true,
        printWidth: 80,
        semi: false, // set to false is you don't like semicolon
      },
    ],
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
