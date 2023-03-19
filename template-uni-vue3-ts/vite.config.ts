import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, __dirname); //__dirname表示当前文件所处目录
  // const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [uni()],

    server: {
      host: '127.0.0.1', // 指定服务器应该监听哪个 IP 地址
      port: 5000, // 指定开发服务器端口
      strictPort: true, // 若端口已被占用则会直接退出
      https: false, // 启用 TLS + HTTP/2
      open: true, // 启动时自动在浏览器中打开应用程序
      proxy: {
        // 配置自定义代理规则
        '/service-provide': {
          target: env.VITE_BASE_API,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },

    build: {
      //打包环境移除console.log，debugger
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
      //打包文件按照类型分文件夹显示
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
        },
        output: {
          chunkFileNames: 'js/[name]-[hash].js',
          entryFileNames: 'js/[name]-[hash].js',
          assetFileNames: '[ext]/[name]-[hash].[ext]',
        },
      },
    },
  };
});
