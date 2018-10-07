module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 不允许在语句后存在多余的空格
    'no-trailing-spaces': 'error',
    // 不允许函数括号之间存在空格
    'space-before-function-paren': ['error', 'never'],
    // 禁止扩展原生对象
    'no-extend-native': [0],
    // 要求或禁止函数圆括号之前有一个空格
    'space-before-function-paren': ['error', {
        // 针对匿名函数表达式 (比如 function () {})
        'anonymous': 'ignore',
        // 针对命名的函数表达式 (比如 function foo () {})
        'named': 'ignore',
        // 针对异步的箭头函数表达式 (比如 async () => {})
        'asyncArrow': 'ignore'
    }]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
