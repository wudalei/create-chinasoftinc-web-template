import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    userInfo: {
      name: '张三',
    },
  }),
  // 也可以这样定义
  // state: () => ({ count: 0 })
  actions: {
    // 同步修改
    setUserInfo(userInfo: any) {
      this.userInfo = userInfo;
    },
    // 异步保存
    setUserInfoForWait(userInfo: any) {
      return new Promise((resolve) => {
        setTimeout(() => {
          this.userInfo = userInfo;
          resolve(userInfo);
        }, 1000);
      });
    },
  },
  getters: {
    getName: (state) => state.userInfo.name,
  },
});
