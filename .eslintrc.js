module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: [
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest'
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    semi: ['error', 'always']
  },
  ignorePatterns: [
    '**/node_modules/**',
    '**/out/**'
  ]
};
