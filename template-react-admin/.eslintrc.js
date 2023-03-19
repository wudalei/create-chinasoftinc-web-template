/*
 * @Author: wudalei
 * @LastEditor: wudalei
 * @Descripttion:
 * @params:
 * @Date: 2023-03-16 16:41:44
 * @LastEditTime: 2023-03-18 14:02:21
 */
module.exports = {
  extends: [require.resolve('@umijs/lint/dist/config/eslint')],
  globals: {
    page: true,
    REACT_APP_ENV: true,
  },
};
