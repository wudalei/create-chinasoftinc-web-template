#!/usr/bin/env node

const prompts = require("prompts");
const kolorist = require("kolorist");
const { blue, cyan, green, lightGreen, lightRed, magenta, red, reset, yellow } =
  kolorist;
const cwd = process.cwd();

const path = require("path");

const init = async () => {
  const { projectName } = await prompts({
    type: "text",
    name: "projectName",
    message: reset("请输入项目名称:"),
    initial: "myApp",
  });

  const { type } = await prompts({
    type: "select",
    message: cyan("请选择技术栈"),
    choices: [
      { title: "vue-admin", value: "vue-admin" },
      { title: "react-admin", value: "react-admin" },
      { title: "uni-app", value: "uni-app" },
    ],
    name: "type",
    initial: 1,
  });

  const root = path.join(cwd, projectName);
  console.log("👴2023-03-06 23:46:38 index.js line:31", { projectName, type ,root});
};

init().catch((e) => {
  console.error(e);
});
