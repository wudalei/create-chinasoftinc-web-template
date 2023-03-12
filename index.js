#!/usr/bin/env node

const prompts = require("prompts");
const kolorist = require("kolorist");
const { blue, cyan, green, lightGreen, lightRed, magenta, red, reset, yellow } =
  kolorist;
const cwd = process.cwd();
const fs = require("node:fs");

const path = require("path");
const getName = async () => {
  const { projectName } = await prompts({
    type: "text",
    name: "projectName",
    message: reset("请输入项目名称:"),
    initial: "myApp",
  });
  if (!projectName) {
    throw console.log(red("项目名称不能为空"));
  }
  const root = path.join(cwd, projectName);
  // 如果文件夹存在 重新输入文件名
  if (fs.existsSync(root)) {
    console.log(red("该文件夹已存在，请重新输入"));
    return getName();
  }

  return projectName
};

const init = async () => {
  const projectName = await getName();
  const root = path.join(cwd, projectName);
  const { type } = await prompts({
    type: "select",
    message: cyan("请选择技术栈"),
    choices: [
      { title: "vue-admin", value: "template-vue-admin" },
      { title: "react-admin", value: "template-react-admin" },
      { title: "uni-vue3-ts", value: "template-uni-vue3-ts" },
    ],
    name: "type",
    initial: 0,
  });

  if (!type) {
    console.log(red("创建失败，请重新创建"));
    return;
  }

  copy(path.resolve(__dirname, `./${type}`), root);
  console.log(green("项目创建成功，接下来请选择以下命令:"));
  console.log(green(`cd ./${projectName}`));
  console.log(green(`pnpm install or npm install or yarn install 安装依赖`));
};

init().catch((e) => {
  console.error(e);
});
function copyDir(srcDir, destDir) {
  fs.mkdirSync(destDir, { recursive: true });
  for (const file of fs.readdirSync(srcDir)) {
    const srcFile = path.resolve(srcDir, file);
    const destFile = path.resolve(destDir, file);
    copy(srcFile, destFile);
  }
}

function copy(src, dest) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    copyDir(src, dest);
  } else {
    fs.copyFileSync(src, dest);
  }
}
