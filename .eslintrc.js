'use strict';

// node core

// third-party

// internal

module.exports = {
  parserOptions: {
    sourceType: 'script',
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: false,
    },
  },
  env: {
    node: true,
  },
  plugins: ['prettier'],
  extends: ['airbnb-base', 'prettier'],
  rules: {
    strict: ['error', 'safe'],
    'prettier/prettier': 'error',
    // disallow dangling underscores in identifiers
    // https://eslint.org/docs/rules/no-underscore-dangle
    'no-underscore-dangle': [
      'error',
      {
        allow: ['_id'],
        allowAfterThis: false,
        allowAfterSuper: false,
        enforceInMethodNames: true,
      },
    ],
  },
  overrides: [
    {
      files: [
        '**/__mocks__/**',
        '**/__tests__/**',
        '**/__fixtures__/**',
        '**/?(*.)+(spec|test).[jt]s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
