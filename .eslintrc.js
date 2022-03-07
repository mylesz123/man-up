module.exports = {
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  extends: ['@remix-run/eslint-config', 'wesbos'],
  rules: {
    'no-console': 1,
    'prettier/prettier': [
      1,
      {
        trailingComma: 'es5',
        singleQuote: true,
        printWidth: 70,
      },
    ],
    'global-require': 'off',
    'arrow-body-style': 'off',
    camelcase: 'off',
    'react/sort-prop-types': 1,
    'no-nested-ternary': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 1,
    'no-plusplus': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-no-bind': 'off',
    quotes: [
      1,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
  },
  // enabled for typescript
  parser: '@typescript-eslint/parser',
  plugins: [
    // https://stackoverflow.com/questions/60547153/eslint-parsing-error-unexpected-token-on-typescript-cast-operator-as
    '@typescript-eslint',
    'import',
  ],
  settings: {
    'import/resolver': {
      // enable path alias imports
      typescript: {
        alwaysTryTypes: true,
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
