module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    // semi: [2, 'always']
  },
  ignorePatterns: [
    '**/node_modules/**',
    '.git/**'
  ],
}
