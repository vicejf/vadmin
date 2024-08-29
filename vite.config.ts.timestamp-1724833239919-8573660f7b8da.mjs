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
      host: "0.0.0.0",
      // https: {
      //   pfx: fs.readFileSync('keystore.p12'),
      //   passphrase: 'Hec123456.', // 如果证书有密码，请提供密码
      // },
      // port: 8080,
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx2aWNlamZcXFxcRG9jdW1lbnRzXFxcXHdvcmtzcGFjZVxcXFx2YWRtaW5cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXHZpY2VqZlxcXFxEb2N1bWVudHNcXFxcd29ya3NwYWNlXFxcXHZhZG1pblxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvdmljZWpmL0RvY3VtZW50cy93b3Jrc3BhY2UvdmFkbWluL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQXBwbGljYXRpb25Db25maWcgfSBmcm9tICdAdmJlbi92aXRlLWNvbmZpZyc7XG5cbi8vIGltcG9ydCBmcyBmcm9tICdmcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUFwcGxpY2F0aW9uQ29uZmlnKHtcbiAgb3ZlcnJpZGVzOiB7XG4gICAgb3B0aW1pemVEZXBzOiB7XG4gICAgICBpbmNsdWRlOiBbXG4gICAgICAgICdlY2hhcnRzL2NvcmUnLFxuICAgICAgICAnZWNoYXJ0cy9jaGFydHMnLFxuICAgICAgICAnZWNoYXJ0cy9jb21wb25lbnRzJyxcbiAgICAgICAgJ2VjaGFydHMvcmVuZGVyZXJzJyxcbiAgICAgICAgJ3FyY29kZScsXG4gICAgICAgICdAaWNvbmlmeS9pY29uaWZ5JyxcbiAgICAgICAgJ2FudC1kZXNpZ24tdnVlL2VzL2xvY2FsZS96aF9DTicsXG4gICAgICAgICdhbnQtZGVzaWduLXZ1ZS9lcy9sb2NhbGUvZW5fVVMnLFxuICAgICAgXSxcbiAgICB9LFxuICAgIHNlcnZlcjoge1xuICAgICAgaG9zdDogJzAuMC4wLjAnLFxuICAgICAgLy8gaHR0cHM6IHtcbiAgICAgIC8vICAgcGZ4OiBmcy5yZWFkRmlsZVN5bmMoJ2tleXN0b3JlLnAxMicpLFxuICAgICAgLy8gICBwYXNzcGhyYXNlOiAnSGVjMTIzNDU2LicsIC8vIFx1NTk4Mlx1Njc5Q1x1OEJDMVx1NEU2Nlx1NjcwOVx1NUJDNlx1NzgwMVx1RkYwQ1x1OEJGN1x1NjNEMFx1NEY5Qlx1NUJDNlx1NzgwMVxuICAgICAgLy8gfSxcbiAgICAgIC8vIHBvcnQ6IDgwODAsXG4gICAgICBwcm94eToge1xuICAgICAgICAnL2FwaSc6IHtcbiAgICAgICAgICB0YXJnZXQ6ICdodHRwOi8vbG9jYWxob3N0Ojg0NDMnLFxuICAgICAgICAgIC8vIHRhcmdldDogJ2h0dHA6Ly8xOTIuMTY4LjE5MS4yMDo4NDQzJyxcbiAgICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXG4gICAgICAgICAgLy8gd3M6IHRydWUsXG4gICAgICAgICAgcmV3cml0ZTogKHBhdGgpID0+IHBhdGgucmVwbGFjZShuZXcgUmVnRXhwKGBeL2FwaWApLCAnJyksXG4gICAgICAgICAgLy8gb25seSBodHRwc1xuICAgICAgICAgIC8vIHNlY3VyZTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgICcvdXBsb2FkJzoge1xuICAgICAgICAgIHRhcmdldDogJ2h0dHBzOi8vbG9jYWxob3N0OjMzMDAvdXBsb2FkJyxcbiAgICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXG4gICAgICAgICAgd3M6IHRydWUsXG4gICAgICAgICAgcmV3cml0ZTogKHBhdGgpID0+IHBhdGgucmVwbGFjZShuZXcgUmVnRXhwKGBeL3VwbG9hZGApLCAnJyksXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgb3BlbjogdHJ1ZSwgLy8gXHU5ODc5XHU3NkVFXHU1NDJGXHU1MkE4XHU1NDBFXHVGRjBDXHU4MUVBXHU1MkE4XHU2MjUzXHU1RjAwXG4gICAgICB3YXJtdXA6IHtcbiAgICAgICAgY2xpZW50RmlsZXM6IFsnLi9pbmRleC5odG1sJywgJy4vc3JjL3t2aWV3cyxjb21wb25lbnRzfS8qJ10sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNFQsU0FBUywrQkFBK0I7QUFJcFcsSUFBTyxzQkFBUSx3QkFBd0I7QUFBQSxFQUNyQyxXQUFXO0FBQUEsSUFDVCxjQUFjO0FBQUEsTUFDWixTQUFTO0FBQUEsUUFDUDtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsUUFBUTtBQUFBLE1BQ04sTUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU1OLE9BQU87QUFBQSxRQUNMLFFBQVE7QUFBQSxVQUNOLFFBQVE7QUFBQTtBQUFBLFVBRVIsY0FBYztBQUFBO0FBQUEsVUFFZCxTQUFTLENBQUMsU0FBUyxLQUFLLFFBQVEsSUFBSSxPQUFPLE9BQU8sR0FBRyxFQUFFO0FBQUE7QUFBQTtBQUFBLFFBR3pEO0FBQUEsUUFDQSxXQUFXO0FBQUEsVUFDVCxRQUFRO0FBQUEsVUFDUixjQUFjO0FBQUEsVUFDZCxJQUFJO0FBQUEsVUFDSixTQUFTLENBQUMsU0FBUyxLQUFLLFFBQVEsSUFBSSxPQUFPLFVBQVUsR0FBRyxFQUFFO0FBQUEsUUFDNUQ7QUFBQSxNQUNGO0FBQUEsTUFDQSxNQUFNO0FBQUE7QUFBQSxNQUNOLFFBQVE7QUFBQSxRQUNOLGFBQWEsQ0FBQyxnQkFBZ0IsNEJBQTRCO0FBQUEsTUFDNUQ7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
