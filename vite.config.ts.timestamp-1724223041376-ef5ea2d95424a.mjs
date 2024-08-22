// vite.config.ts
import { defineApplicationConfig } from "file:///C:/Users/vicejf/Documents/workspace/vadmin/internal/vite-config/dist/index.mjs";
var vite_config_default = defineApplicationConfig({
  overrides: {
    optimizeDeps: {
      include: [
        "echarts/core",
        "echarts/charts",
        "echarts/components",
        "echarts/renderers",
        "qrcode",
        "@iconify/iconify",
        "ant-design-vue/es/locale/zh_CN",
        "ant-design-vue/es/locale/en_US"
      ]
    },
    server: {
      host: true,
      // https: {
      //   pfx: fs.readFileSync('keystore.p12'),
      //   passphrase: 'Hec123456.', // 如果证书有密码，请提供密码
      // },
      port: import.meta.env.VITE_PROT,
      proxy: {
        "/api": {
          target: "http://localhost:8443",
          // target: 'http://192.168.191.20:8443',
          changeOrigin: true,
          // ws: true,
          rewrite: (path) => path.replace(new RegExp(`^/api`), "")
          // only https
          // secure: false,
        },
        "/upload": {
          target: "https://localhost:3300/upload",
          changeOrigin: true,
          ws: true,
          rewrite: (path) => path.replace(new RegExp(`^/upload`), "")
        }
      },
      open: true,
      // 项目启动后，自动打开
      warmup: {
        clientFiles: ["./index.html", "./src/{views,components}/*"]
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx2aWNlamZcXFxcRG9jdW1lbnRzXFxcXHdvcmtzcGFjZVxcXFx2YWRtaW5cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXHZpY2VqZlxcXFxEb2N1bWVudHNcXFxcd29ya3NwYWNlXFxcXHZhZG1pblxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvdmljZWpmL0RvY3VtZW50cy93b3Jrc3BhY2UvdmFkbWluL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQXBwbGljYXRpb25Db25maWcgfSBmcm9tICdAdmJlbi92aXRlLWNvbmZpZyc7XG4vLyBpbXBvcnQgZnMgZnJvbSAnZnMnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVBcHBsaWNhdGlvbkNvbmZpZyh7XG4gIG92ZXJyaWRlczoge1xuICAgIG9wdGltaXplRGVwczoge1xuICAgICAgaW5jbHVkZTogW1xuICAgICAgICAnZWNoYXJ0cy9jb3JlJyxcbiAgICAgICAgJ2VjaGFydHMvY2hhcnRzJyxcbiAgICAgICAgJ2VjaGFydHMvY29tcG9uZW50cycsXG4gICAgICAgICdlY2hhcnRzL3JlbmRlcmVycycsXG4gICAgICAgICdxcmNvZGUnLFxuICAgICAgICAnQGljb25pZnkvaWNvbmlmeScsXG4gICAgICAgICdhbnQtZGVzaWduLXZ1ZS9lcy9sb2NhbGUvemhfQ04nLFxuICAgICAgICAnYW50LWRlc2lnbi12dWUvZXMvbG9jYWxlL2VuX1VTJyxcbiAgICAgIF0sXG4gICAgfSxcbiAgICBzZXJ2ZXI6IHtcbiAgICAgIGhvc3Q6IHRydWUsXG4gICAgICAvLyBodHRwczoge1xuICAgICAgLy8gICBwZng6IGZzLnJlYWRGaWxlU3luYygna2V5c3RvcmUucDEyJyksXG4gICAgICAvLyAgIHBhc3NwaHJhc2U6ICdIZWMxMjM0NTYuJywgLy8gXHU1OTgyXHU2NzlDXHU4QkMxXHU0RTY2XHU2NzA5XHU1QkM2XHU3ODAxXHVGRjBDXHU4QkY3XHU2M0QwXHU0RjlCXHU1QkM2XHU3ODAxXG4gICAgICAvLyB9LFxuICAgICAgcG9ydDogaW1wb3J0Lm1ldGEuZW52LlZJVEVfUFJPVCxcbiAgICAgIHByb3h5OiB7XG4gICAgICAgICcvYXBpJzoge1xuICAgICAgICAgIHRhcmdldDogJ2h0dHA6Ly9sb2NhbGhvc3Q6ODQ0MycsXG4gICAgICAgICAgLy8gdGFyZ2V0OiAnaHR0cDovLzE5Mi4xNjguMTkxLjIwOjg0NDMnLFxuICAgICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcbiAgICAgICAgICAvLyB3czogdHJ1ZSxcbiAgICAgICAgICByZXdyaXRlOiAocGF0aCkgPT4gcGF0aC5yZXBsYWNlKG5ldyBSZWdFeHAoYF4vYXBpYCksICcnKSxcbiAgICAgICAgICAvLyBvbmx5IGh0dHBzXG4gICAgICAgICAgLy8gc2VjdXJlOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgJy91cGxvYWQnOiB7XG4gICAgICAgICAgdGFyZ2V0OiAnaHR0cHM6Ly9sb2NhbGhvc3Q6MzMwMC91cGxvYWQnLFxuICAgICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcbiAgICAgICAgICB3czogdHJ1ZSxcbiAgICAgICAgICByZXdyaXRlOiAocGF0aCkgPT4gcGF0aC5yZXBsYWNlKG5ldyBSZWdFeHAoYF4vdXBsb2FkYCksICcnKSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBvcGVuOiB0cnVlLCAvLyBcdTk4NzlcdTc2RUVcdTU0MkZcdTUyQThcdTU0MEVcdUZGMENcdTgxRUFcdTUyQThcdTYyNTNcdTVGMDBcbiAgICAgIHdhcm11cDoge1xuICAgICAgICBjbGllbnRGaWxlczogWycuL2luZGV4Lmh0bWwnLCAnLi9zcmMve3ZpZXdzLGNvbXBvbmVudHN9LyonXSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE0VCxTQUFTLCtCQUErQjtBQUdwVyxJQUFPLHNCQUFRLHdCQUF3QjtBQUFBLEVBQ3JDLFdBQVc7QUFBQSxJQUNULGNBQWM7QUFBQSxNQUNaLFNBQVM7QUFBQSxRQUNQO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTixNQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtOLE1BQU0sWUFBWSxJQUFJO0FBQUEsTUFDdEIsT0FBTztBQUFBLFFBQ0wsUUFBUTtBQUFBLFVBQ04sUUFBUTtBQUFBO0FBQUEsVUFFUixjQUFjO0FBQUE7QUFBQSxVQUVkLFNBQVMsQ0FBQyxTQUFTLEtBQUssUUFBUSxJQUFJLE9BQU8sT0FBTyxHQUFHLEVBQUU7QUFBQTtBQUFBO0FBQUEsUUFHekQ7QUFBQSxRQUNBLFdBQVc7QUFBQSxVQUNULFFBQVE7QUFBQSxVQUNSLGNBQWM7QUFBQSxVQUNkLElBQUk7QUFBQSxVQUNKLFNBQVMsQ0FBQyxTQUFTLEtBQUssUUFBUSxJQUFJLE9BQU8sVUFBVSxHQUFHLEVBQUU7QUFBQSxRQUM1RDtBQUFBLE1BQ0Y7QUFBQSxNQUNBLE1BQU07QUFBQTtBQUFBLE1BQ04sUUFBUTtBQUFBLFFBQ04sYUFBYSxDQUFDLGdCQUFnQiw0QkFBNEI7QUFBQSxNQUM1RDtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
