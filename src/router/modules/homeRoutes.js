import Layout from '@/layout/layout.vue'

const homeRoutes = {
  path: '/',
  name: 'Layout',
  component: Layout,
  redirect: '/homePage',
  meta: {
    icon: 'el-icon-s-home',
    showLink: true,
    savedPosition: false,
    rank: 0,
  },
  children: [
    {
      path: '/homePage',
      name: 'homePage',
      component: () => import(/* webpackChunkName: "homepage" */ '@/views/homePage/homePage.vue'),
      meta: {
        title: '首页',
        showLink: true,
        savedPosition: false
      }
    }
  ]
}

export default homeRoutes
