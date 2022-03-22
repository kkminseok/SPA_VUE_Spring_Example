import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '/@' : path.resolve(__dirname,'./src'),
      '/@components': path.resolve(__dirname, './src/components'),
      '/@pages': path.resolve(__dirname,'./src/pages'),
      '/@router': path.resolve(__dirname, './src/router'),
      '/@modules': path.resolve(__dirname, './src/modules'),
      '/@compositions': path.resolve(__dirname, './src/compositions'),
    },
  },
  plugins: [vue()]
})
