module.exports = {
  // 设置每行的最大长度为100
  printWidth: 100,
  // 使用分号
  semi: true,
  // 对 Vue 文件中的 <script> 和 <style> 部分进行缩进
  vueIndentScriptAndStyle: false,
  // 使用单引号
  singleQuote: true,
  // 在对象或数组最后一个元素后面添加逗号
  trailingComma: 'all',
  // 不自动换行
  proseWrap: 'never',
  // HTML 中空格的敏感性设置为 strict
  htmlWhitespaceSensitivity: 'strict',
  // 根据操作系统自动设置换行符
  endOfLine: 'auto',
  overrides: [
    {
      files: '*.html',
      options: {
        parser: 'html',
      },
    },
  ],
};
