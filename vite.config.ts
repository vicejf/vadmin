import { defineApplicationConfig } from '@cas/vite-config';
import fs from 'fs';

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
      https: {
        pfx: fs.readFileSync('keystore.p12'),
        passphrase: 'Hec123456.', // 如果证书有密码，请提供密码
      },
      proxy: {
        '/basic-api': {
          target: 'https://192.168.7.148:8443',
          // target: 'https://172.17.142.200:8443',
          changeOrigin: false,
          ws: true,
          // rewrite: (path) => path.replace(/^\/basic-api/, ''),
          rewrite: (path) => path.replace(new RegExp(`^/basic-api`), ''),
          // only https
          secure: false,
        },
        '/upload': {
          target: 'http://192.168.7.148:8443/upload',
          changeOrigin: true,
          ws: true,
          rewrite: (path) => path.replace(new RegExp(`^/upload`), ''),
        },
      },
    },
  },
});
