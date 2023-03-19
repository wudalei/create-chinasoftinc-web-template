/*
 * @Author: wudalei
 * @LastEdit: wudalei
 * @Descripttion: 路由页面
 * @params: 
 * @Date: 2023-02-21 09:43:30
 * @LastEditTime: 2023-03-15 16:42:21
 */
export default [
  { path: '/user',name:'用户', layout: false, routes: [{ path: '/user/login', component: './user/login' }] },
  { path: '/welcome',name:'欢迎页', icon: 'smile', component: './Welcome' },
  {
    path: '/admin',
    icon: 'crown',
    name:'权限页',
    access: 'canAdmin',
    routes: [
      { path: '/admin', redirect: '/admin/sub-page' },
      { path: '/admin/sub-page',name:'子页面', component: './Admin' },
    ],
  },
  { icon: 'table', path: '/list',name:'表格页', component: './tableList' },
  { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
  { icon: 'BorderOuterOutlined', path: '/tableTemplates',name:'表格示例页', component: './tableTemplates' },
];
