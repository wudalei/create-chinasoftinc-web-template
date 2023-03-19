/*
 * @Author: ltm
 * @Descripttion: 生产环境配置
 * @params:
 * @Date: 2022-05-21 11:09:13
 * @LastEditTime: 2023-03-18 16:29:15
 */
// https://umijs.org/config/
import { defineConfig } from '@umijs/max';

const BASE_URL = 'https://manage-dev.hajhzh.cn';

export default defineConfig({
  // 配置全局变量 透传
  define: {
    REACT_APP_LOCAL_URL: 'http://106.12.40.65:8000',
    REACT_APP_PROD_URL: BASE_URL,
    REACT_APP_ENV: 'dev',
  },
  plugins: [],
  publicPath: process.env.NODE_ENV === 'development' ? '/' : `${BASE_URL}/`,
});
