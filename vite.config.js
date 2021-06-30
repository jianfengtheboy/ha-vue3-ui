/*
 * @Author: Sun
 * @LastEditors: Sun
 * @Email: jianfengtheboy@163.com
 * @Date: 2021-05-25 18:03:12
 * @LastEditTime: 2021-06-30 13:23:43
 * @Description: 
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
import { resolve } from 'path'

function pathResolve(dir) {
  return resolve(__dirname, '.', dir)
}

export default defineConfig({
  plugins: [
    vue(),
    // element-plus 样式按需引入
    styleImport({
      libs: [{
        libraryName: 'element-plus',
        esModule: true,
        ensureStyleFile: true,
        resolveStyle: (name) => {
          name = name.slice(3)
          return `element-plus/packages/theme-chalk/src/${name}.scss`;
        },
        resolveComponent: (name) => {
          return `element-plus/lib/${name}`;
        },
      }]
    })
  ],
  resolve: {
    alias: {
      '@': pathResolve('src')
    }
  },
  server: {
    hmr: {
      overlay: false
    }
  }
})
