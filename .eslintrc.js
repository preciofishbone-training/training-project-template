module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier'],
  globals: {
    $: true,
    document: true,
    window: true,
    fetch: true,
  },
  ignorePatterns: ['/Content/vendor/js/**.js'],
  rules: {
    'prettier/prettier': ['error'],
    'linebreak-style': [
      'error',
      process.platform === 'win32' ? 'windows' : 'unix',
    ],
  },
};
