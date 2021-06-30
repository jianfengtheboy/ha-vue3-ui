import Layout from '@/layout/layout.vue'

const componentsRoutes = {
  path: "/components",
  name: "components",
  component: Layout,
  redirect: "/components/haBasic/haTransition",
  meta: {
    icon: 'el-icon-menu',
    title: '组件',
    showLink: true,
    savedPosition: true,
    rank: 4
  },
  children: [
    {
      path: '/components/haBasic',
      component: () => import(/* webpackChunkName: "haBasic" */ '@/views/components/haBasic/haBasic.vue'),
      name: 'haBasic',
      redirect: '/components/haBasic/haTransition',
      meta: {
        title: '基础组件',
        showLink: true,
        savedPosition: false,
      },
      children: [
        {
          path: '/components/haBasic/haTransition',
          name: 'haTransition',
          component: () => import(/* webpackChunkName: "transition" */ '@/views/components/haBasic/haTransition/haTransition.vue'),
          meta: {
            title: "内置过渡动画",
            showLink: true,
            savedPosition: true
          }
        },
        {
          path: '/components/haBasic/haLayout',
          name: 'haLayout',
          component: () => import(/* webpackChunkName: "haLayout" */ '@/views/components/haBasic/haLayout/haLayout.vue'),
          meta: {
            title: "Layout 布局",
            showLink: true,
            savedPosition: true
          }
        },
        {
          path: '/components/haBasic/haContainer',
          name: 'haContainer',
          component: () => import(/* webpackChunkName: "haContainer" */ '@/views/components/haBasic/haContainer/haContainer.vue'),
          meta: {
            title: "Container 布局容器",
            showLink: true,
            savedPosition: true
          }
        },
        {
          path: "/components/haBasic/haButton",
          name: "haButton",
          component: () => import(/* webpackChunkName: "haButton" */ "@/views/components/haBasic/haButton/haButton.vue"),
          meta: {
            title: "Button 按钮",
            showLink: true,
            savedPosition: true
          }
        },
        {
          path: "/components/haBasic/haSpace",
          name: "haSpace",
          component: () => import(/* webpackChunkName: "haSpace" */ "@/views/components/haBasic/haSpace/haSpace.vue"),
          meta: {
            title: "Space 间距",
            showLink: true,
            savedPosition: true
          }
        }
      ]
    },
    {
      path: '/components/haForm',
      component: () => import(/* webpackChunkName: "haForm" */ '@/views/components/haForm/haForm.vue'),
      name: 'haForm',
      redirect: '/components/haForm/haRadio',
      meta: {
        title: '表单组件',
        showLink: true,
        savedPosition: false,
      },
      children: [
        {
          path: "/components/haForm/haRadio",
          name: "haRadio",
          component: () => import(/* webpackChunkName: "haRadio" */ "@/views/components/haForm/haRadio/haRadio.vue"),
          meta: {
            title: "Radio 单选框",
            showLink: true,
            savedPosition: true
          }
        },
        {
          path: "/components/haForm/haCheckbox",
          name: "haCheckbox",
          component: () => import(/* webpackChunkName: "haCheckbox" */ "@/views/components/haForm/haCheckbox/haCheckbox.vue"),
          meta: {
            title: "Checkbox 多选框",
            showLink: true,
            savedPosition: true
          }
        }
      ]
    }
  ]
}

export default componentsRoutes
