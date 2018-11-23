module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: ['plugin:vue/recommended', 'plugin:prettier/recommended'],
  // required to lint *.vue files
  plugins: ['vue', 'prettier'],
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/max-attributes-per-line': [0],
    'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }],
    'max-len': [0],
    'no-param-reassign': [0],
    'class-methods-use-this': [0],
    'no-plusplus': [0],
    'func-names': [0],
    'no-underscore-dangle': [0],
    'no-control-regex': [0],
    'import/prefer-default-export': [0]
  }
}
