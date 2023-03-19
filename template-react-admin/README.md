## 简介

此项目为 react 项目，应用于内部学习和项目开发的基线框架。框架主要是基于 antdpro 进行开发。开发前请确保熟悉并掌握以下技术栈：

- react: https://zh-hans.reactjs.org/
- TypeScript：https://www.tslang.cn/index.html
- ant-design：https://ant.design/index-cn
- ant-design-pro: https://pro.ant.design/zh-CN
- umijs: https://v4.umijs.org/

注：开发前请务必阅读上述所有文档。项目的配置和扩展能力主要看 umijs 和 ant-design-pro。应用至实际项目开发请修改 readme 内容。

## 特性

- **主要特点**：适用于大型项目、页面复杂且需求多样化。上手难度高、需要对相关技术栈有一定熟悉度。
- **生态**：蚂蚁金融团队多年迭代开发，生态丰富，功能强大。
- **TypeScript**: 应用程序级 JavaScript 的语言
- **区块**: 通过区块模板快速构建页面
- **优雅美观**：基于 Ant Design 体系精心设计
- **常见设计模式**：提炼自中后台应用的典型页面和场景
- **最新技术栈**：使用 React/umi/dva/antd 等前端前沿技术开发
- **响应式**：针对不同屏幕大小设计
- **主题**：可配置的主题满足多样化的品牌诉求
- **国际化**：内建业界通用的国际化方案
- **最佳实践**：良好的工程实践助您持续产出高质量代码
- **Mock 数据**：实用的本地数据调试方案
- **UI 测试**：自动化测试保障前端产品质量

## 主要结构

```
- config // 配置
  - config.ts // 主要配置
  - routes.ts // 路由
- mock // 模拟数据
- public
- src
  - components // 组件
  - pages // 页面
    - tableTemplates // 示例模块
	  - index.ts
   - login // 登录模块
	  - index.ts
 - 404.tsx // 404
 - app.ts // 入口文件，全局配置
- type // TypeScript类型
- package.json
- CODE_OF_CONDUCT.md // 框架开发要求
- README.md //框架使用手册
```

## 使用

项目安装

```bash
# 使用 npm
npm i
# 使用 pnpm
pnpm i
# 使用 yarn
yarn
```

项目启动

```bash
# 使用 npm
npm run start
```

项目打包

```bash
# 使用 npm
npm run build
```

环境区分

```bash
# 开发
npm run start
# 测试
npm run start:test
# 生产
npm run start:pro
```

注:不同环境对应的操作配置在 config 文件夹中，在 package.json 根据不同的脚本命令切换环境。详情请参考 umijs 多环境配置。https://v3.umijs.org/zh-CN/docs/config#%E5%A4%9A%E7%8E%AF%E5%A2%83%E5%A4%9A%E4%BB%BD%E9%85%8D%E7%BD%AE

## 支持环境

现代浏览器。

| Edge | Firefox         | Chrome          | Safari          | Opera           |
| ---- | --------------- | --------------- | --------------- | --------------- |
| Edge | last 2 versions | last 2 versions | last 2 versions | last 2 versions |

## 支持环境

当前问题

- 国际化删除命令存在报错。
- keepalive 功能不完善，缺少 active 钩子。

## 参与贡献

我们非常欢迎你的贡献，你可以通过以下方式和我们一起共建基线框架：

- 联系维护人员。吴磊 wulei051@chinasoftinc.com。
- 提交 pr。
- 修复 bug。
- 分享实践案例。
