module.exports = {
  extends: 'eslint-config-airbnb-base',
  rules: {
    'no-console': 'warn',
  },
  parserOptions: {
    ecmaVersion: 10,
    sourceType: 'module',
  },
  env: {
    browser: true,
  },
  globals: {
    document: true,
    alert: true,
  },
};
