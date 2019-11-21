module.exports = {
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
      classes: true,
      jsx: true,
    },
  },
  env: {
    browser: true,
    commonjs: true,
    node: true,
    jest: true,
  },
  plugins: [
    'html',
    'react',
    'react-hooks',
    '@typescript-eslint',
    'prettier',
  ],
  rules: {
    // typescript
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/no-unused-vars': 0, // duplicated
    '@typescript-eslint/explicit-function-return-type': [
      1,
      {
        'allowExpressions': true,
        'allowTypedFunctionExpressions': false // default
      }
    ],
    '@typescript-eslint/explicit-member-accessibility': [
      1,
      {
        'accessibility': 'no-public',
      }
    ],
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-parameter-properties': 0,
    // javascript
    'no-useless-constructor': 0,
    'no-empty-function': [
      1,
      {
        'allow': ['constructors'] // allowed in constructors when using typescript `parameter properties`
      }
    ],
    'no-debugger': 1,
    'no-alert': 1,
    'no-await-in-loop': 0,
    'no-return-assign': ['error', 'except-parens'],
    'no-restricted-syntax': [
      2,
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    // 'no-unused-vars': 0,
    'no-unused-vars': [
      1,
      {
        // ignoreRestSiblings: true,
        argsIgnorePattern: 'res|next|^err',
      },
    ],
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
      },
    ],
    'arrow-body-style': [2, 'as-needed'],
    'no-unused-expressions': [
      2,
      {
        allowTaggedTemplates: true,
      },
    ],
    'no-param-reassign': [
      2,
      {
        props: false,
      },
    ],
    'no-console': 1,
    'import/prefer-default-export': 0,
    import: 0,
    'func-names': 0,
    'space-before-function-paren': 0,
    'comma-dangle': 0,
    'max-len': 0,
    'import/extensions': 0,
    'no-underscore-dangle': 0,
    'consistent-return': 0,
    'react/display-name': 1,
    'react/destructuring-assignment': [
      1,
      'always',
      {
        ignoreClassFields: true,
      },
    ],
    'react/no-array-index-key': 0,
    'react/react-in-jsx-scope': 0,
    'react/prefer-stateless-function': 0,
    'react/forbid-prop-types': 0,
    'react/no-unescaped-entities': 0,
    'jsx-a11y/accessible-emoji': 0,
    'react/require-default-props': 0,
    'react/prop-types': 1,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', 'tsx'],
      },
    ],
    radix: 0,
    'no-shadow': [
      2,
      {
        hoist: 'all',
        allow: ['resolve', 'reject', 'done', 'next', 'err', 'error'],
      },
    ],
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/anchor-is-valid': [
      1,
      {
        aspects: ['invalidHref'],
      },
    ],
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 1,
    // prettier
    'prettier/prettier': [
      2,
      {
        trailingComma: 'es5',
        singleQuote: true,
        printWidth: 80,
      },
    ],
  },
};
