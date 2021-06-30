/*
 * @Author: Sun
 * @LastEditors: Sun
 * @Email: jianfengtheboy@163.com
 * @Date: 2021-05-25 18:03:12
 * @LastEditTime: 2021-06-26 22:18:06
 * @Description: 
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
// 引入element-plus样式
import 'element-plus/packages/theme-chalk/src/base.scss'
// icon-park icon图标
import { install } from '@icon-park/vue-next/es/all'
import '@icon-park/vue-next/styles/index.css'


import 'reset.css'
import '@/styles/index.scss'

import { pluginComponents } from './plugins'

const app = createApp(App)
/**
 * 全局使用icon-park icon图标
 * install(app) 使用图标组件时，前缀为‘icon’，example：‘icon-people’
 * install(app, 'i') 使用图标组件时，前缀为‘i’，example：‘i-people’
 */
install(app) 

pluginComponents.forEach(plugin => {
  app.use(plugin)
})

app.use(router).use(store).mount('#app')
