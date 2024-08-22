import { defineApplicationConfig } from '@vben/vite-config';

// import fs from 'fs';

export default defineApplicationConfig({
  overrides: {
    optimizeDeps: {
      include: [
        'echarts/core',
        'echarts/charts',
        'echarts/components',
        'echarts/renderers',
        'qrcode',
        '@iconify/iconify',
        'ant-design-vue/es/locale/zh_CN',
        'ant-design-vue/es/locale/en_US',
      ],
    },
    server: {
      host: true,
      // https: {
      //   pfx: fs.readFileSync('keystore.p12'),
      //   passphrase: 'Hec123456.', // 如果证书有密码，请提供密码
      // },
      port: 8080,
      proxy: {
        '/api': {
          target: 'http://localhost:8443',
          // target: 'http://192.168.191.20:8443',
          changeOrigin: true,
          // ws: true,
          rewrite: (path) => path.replace(new RegExp(`^/api`), ''),
          // only https
          // secure: false,
        },
        '/upload': {
          target: 'https://localhost:3300/upload',
          changeOrigin: true,
          ws: true,
          rewrite: (path) => path.replace(new RegExp(`^/upload`), ''),
        },
      },
      open: true, // 项目启动后，自动打开
      warmup: {
        clientFiles: ['./index.html', './src/{views,components}/*'],
      },
    },
  },
});
