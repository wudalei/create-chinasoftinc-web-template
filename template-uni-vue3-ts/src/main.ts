import { createSSRApp } from 'vue';
import App from './App.vue';
import pinia from '@/store';

//拦截器
uni.addInterceptor('request', {
  invoke: (config) => {
    console.log(config);
  },
});
export function createApp() {
  const app = createSSRApp(App);
  app.use(pinia);

  return {
    app,
  };
}
