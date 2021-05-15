module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:jest-formatting/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
  ],
  overrides: [
    {
      files: '.eslintrc.js',
      rules: {
        'simple-import-sort/imports': 'off',
      },
    },
  ],
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['simple-import-sort'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'id-length': ['warn', { min: 2, exceptions: ['e', '_'] }],
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-restricted-globals': 'off',
    'react/prop-types': 'off',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
