module.exports = {
    env: {
      browser: true,
      // "es2021": true,
      node: true,
      commonjs: true,
      es6: true,
      jest: true,
    },
    extends: [
      'airbnb-typescript',
      'airbnb/hooks',
      'eslint:recommended',
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:jest/recommended',
      'plugin:prettier/recommended',
      'plugin:react-app/recommended',
      'plugin:react-hooks/recommended',
      'plugin:react/recommended',
      'prettier',
    ],
   globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    // "ecmaVersion": 12
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint', 'jest', 'prettier'],
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/lines-between-class-members': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-loop-func': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-shadow': 'off',
    '@typescript-eslint/no-throw-literal': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/return-await': 'off',
    'a11y/anchor-is-valid': 'off',
    'consistent-return': 'off',
    'default-case': 'off',
    'eslint-disable-next-line': 'off',
    'import/no-cycle': 'off',
    'import/order': 'off',
    'import/prefer-default-export': 'off',
    'jest/no-disabled-tests': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'linebreak-style': 'off',
    'no-case-declarations': 'off',
    'no-console': 'off',
    'no-irregular-whitespace': 'off',
    'no-new': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-return-await': 'off',
    'no-unneeded-ternary': 'off',
    'one-var': 'off',
    'prefer-const': 'off',
    'prefer-destructuring': 'off',
    'prefer-promise-reject-errors': 'off',
    'prefer-template': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-boolean-value': 'off',
    'react/jsx-curly-brace-presence': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-unescaped-entities': 'off',
    'react/prop-types': 'off',
    'react/self-closing-comp': 'off',
    'spaced-comment': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
 }
 