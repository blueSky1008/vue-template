module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    semi: [2, 'never'], // 末尾不使用分号
    quotes: [
      2,
      'single',
      {
        avoidEscape: true, // 允许字符串使用单引号或双引号，只要字符串中包含了一个其它引号，否则需要转义
        allowTemplateLiterals: true, // 允许字符串使用反勾号
      },
    ], // 使用单引号
    'no-empty-function': 2, // 不能有空函数
    'prettier/prettier': 0, // 关闭 prettier/prettier 校验
    'space-infix-ops': 2, // 操作符周围要有空格
    'no-redeclare': 2, // 禁止多次声明同一变量
    'no-new-object': 2, // 禁用 Object 的构造函数
    'arrow-spacing': 2, // 强制箭头函数的箭头前后使用一致的空格
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
  },
}
