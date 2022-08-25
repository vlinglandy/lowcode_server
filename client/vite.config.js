import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
export default defineConfig({
  define: {
    'process.env': {}
  },
  plugins: [vue()],
  resolve: {
    alias: 
      {
        '@': path.resolve(__dirname, 'src')
      }
  },
  server: {
    host:'0.0.0.0',
    port: '3000',
    proxy: {
      '/api': {
        target: 'http://localhost:3001/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '') // 不可以省略rewrite
      }
    }
  }
})