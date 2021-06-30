import { createRouter, createWebHashHistory } from "vue-router"
import NProgress from '@/utils/progress'
import store from '../store'

import homeRoutes from '@/router/modules/homeRoutes'
import remainRoutes from '@/router/modules/remainRoutes'
import componentsRoutes from '@/router/modules/componentsRoutes'

const constantRoutes = [
  homeRoutes,
  componentsRoutes
]

// 按照路由中meta下的rank等级升序来排序路由
export const ascending = (arr) => {
  return arr.sort((a, b) => {
    return a.meta.rank - b.meta.rank
  })
}

// 将所有静态路由导出
export const constantRoutesArr = ascending(constantRoutes)

// Vue-router新版本中，需要使用createRouter来创建路由
const router = createRouter({
  // 指定路由的模式,此处使用的是hash模式
  history: createWebHashHistory(),
  routes: ascending(constantRoutes).concat(...remainRoutes),
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      if (savedPosition) {
        return savedPosition
      } else {
        if (from.meta.saveSrollTop) {
          const top = document.documentElement.scrollTop || document.body.scrollTop
          resolve({ left: 0, top })
        }
      }
    })
  }
})

const whiteList = ['/login', '/register']

router.beforeEach((to, from, next) => {
  NProgress.start()
  const storageHasLogin = localStorage.getItem('hasLogin')
  const { hasLogin } = store.state

  // 无需登录或已登录
  if (hasLogin || storageHasLogin) {
    NProgress.done()
    // 动态title
    to.meta.title ? (document.title = to.meta.title) : ''
    
    return next()
  }
  // 动态title
  to.meta.title ? (document.title = to.meta.title) : ''
  // 全部重定向到登录页
  whiteList.indexOf(to.path) !== -1 ? next() : next('/login')
})

router.afterEach(() => {
  NProgress.done()
})

export default router
