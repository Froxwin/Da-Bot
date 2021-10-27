module.exports = {
  env: {
    browser: true,
    es2021: true,
    commonjs: true,
    es6: true,
    node: true
  },
  extends: [
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    // semi: [2, 'always']
  }
}