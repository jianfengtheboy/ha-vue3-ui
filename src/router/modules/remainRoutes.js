const remainRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/login.vue'),
    meta: {
      title: '登陆',
      showLink: false,
      rank: 101,
    },
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "register" */ '@/views/register.vue'),
    meta: {
      title: '注册',
      showLink: false,
      rank: 102,
    },
  },
  // {
  //   // 找不到路由重定向到404页面
  //   path: '/:pathMatch(.*)',
  //   name: "pathMatch",
  //   component: Layout,
  //   redirect: "/error/404",
  //   meta: {
  //     icon: "el-icon-s-home",
  //     title: "message.hshome",
  //     showLink: false,
  //     savedPosition: false,
  //     rank: 103,
  //   },
  // }
]

export default remainRoutes
