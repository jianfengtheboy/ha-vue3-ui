<template>
  <div class="sidebar-container">
    <div class="sidebar-logo">
      <icon-apple-one class="logo-picture" />
      <span class="logo-title">Hatech</span>
    </div>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        unique-opened
        :collapse-transition="false"
        mode="vertical"
        @select="menuSelect"
      >
        <side-bar-item
          v-for="(route, index) in constantRoutes"
          :key="index"
          :item="route"
          :base-path="route.path">
        </side-bar-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { defineComponent, reactive, ref, toRef, computed } from 'vue'
import sideBarItem from './sideBarItem.vue'
import { constantRoutesArr } from '@/router'
import { useRoute, useRouter } from 'vue-router'

export default defineComponent({
  name: 'sideBar',
  components: {
    sideBarItem
  },
  setup() {
    const constantRoutes = constantRoutesArr
    const route = useRoute()
    const router = useRouter().options.routes

    const activeMenu = computed(() => {
      const { meta, path } = route
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    })

    const menuSelect = (indexPath) => {
      let parentPath = ''
      let parentPathIndex = indexPath.lastIndexOf('/')
      if (parentPathIndex > 0) {
        parentPath = indexPath.slice(0, parentPathIndex)
      }
      // 找到当前路由的信息
      function findCurrentRoute(routes) {
        return routes.map((item, key) => {
          if (item.path === indexPath) {

          } else {
            if (item.children) findCurrentRoute(item.children)
          }
        })
        return
      }
      function increaseIndexes(val) {
        return Object.keys(val).map((v) => {
          return {
            ...val[v],
            key: v
          }
        }).filter((v) => v.meta && v.meta.showLink)
      }

      findCurrentRoute(increaseIndexes(router))
    }

    return {
      constantRoutes,
      activeMenu,
      menuSelect
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/styles/mixin.scss'; 

@mixin merge-style(
  // 菜单选中后字体样式
  $subMenuActiveText,
  //菜单背景
  $menuBg,
  // 鼠标覆盖菜单时的背景
  $menuHover,
  // 子菜单背景
  $subMenuBg,
  // 鼠标覆盖子菜单时的背景
  $subMenuHover
) {
  $menuText: #7a80b4;
  $menuActiveText: #7a80b4;
  $sideBarWidth: 210px;

  .sidebar-container {
    width: $sideBarWidth;
    height: 100%;
    position: fixed;
    font-size: 0px;
    top: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    background-color: $menuBg;
    box-shadow: 0 0 1px #888888;
    z-index: 1001;

    .sidebar-logo {
      position: relative;
      width: 100%;
      height: 50px;
      line-height: 50px;
      font-size: 26px;
      color: #fff;
      background: #081d42;
      text-align: center;
      overflow: hidden;

      .logo-picture {
        font-size: 30px;
        margin-right: 5px;
      }
    }

    :deep(.scrollbar-wrapper) {
      overflow-x: hidden;
    }

    :deep(.el-scrollbar__bar.is-vertical) {
      right: 0px;
    }

    :deep(.el-scrollbar) {
      height: calc(100% - 50px);
    }

    :deep(.is-horizontal) {
      display: none;
    }

    :deep(a) {
      display: inline-block;
      width: 100%;
      overflow: hidden;
    }

    :deep(.el-menu) {
      border: none;
      height: 100%;
      background-color: transparent;
    }

    :deep(.el-menu-item),
    :deep(.el-submenu__title) {
      color: $menuText;
    }

    // menu hover
    :deep(.submenu-title-noDropdown),
    :deep(.el-submenu__title) {
      &:hover {
        background-color: $menuHover !important;
      }
      background: $menuBg;
    }

    :deep(.is-active) > .el-submenu__title,
    :deep(.is-active.submenu-title-noDropdown) {
      color: $subMenuActiveText !important;
      i {
        color: $subMenuActiveText !important;
      }
    }

    & :deep(.nest-menu) .el-submenu > .el-submenu__title,
    & :deep(.el-submenu) .el-menu-item {
      font-size: 12px;
      min-width: $sideBarWidth !important;
      background-color: $subMenuBg !important;

      &:hover {
        background-color: $subMenuHover !important;
      }
    }

    :deep(.el-menu-item.is-active) {
      transition: color 0.3s;
      color: $subMenuActiveText !important;
      background-color: $menuHover !important;
    }
  }

  // 菜单折叠
  :deep(.el-menu--vertical) {
    .el-menu--popup {
      background-color: $subMenuBg !important;
      .el-menu-item {
        color: $menuText;
        background-color: $subMenuBg;
        &:hover {
          background-color: $subMenuHover;
        }
      }
      .el-submenu__title {
        color: $menuText;
      }
    }
    & > .el-menu {
      i {
        margin-right: 16px;
      }
    }

    .is-active > .el-submenu__title,
    .is-active.submenu-title-noDropdown {
      color: $subMenuActiveText !important;
      i {
        color: $subMenuActiveText !important;
      }
    }

    .nest-menu .el-submenu > .el-submenu__title,
    .el-menu-item {
      &:hover {
        background-color: $menuHover !important;
      }
    }
  }

  :deep(.el-scrollbar__wrap) {
    overflow: auto;
    height: 100%;
  }

  :deep(.el-menu--collapse) .el-menu .el-submenu {
    min-width: $sideBarWidth !important;
  }

  :deep(.el-menu-item:hover), :deep(.el-menu-item:focus) {
    background-color: $menuHover;
  }
}

$subMenuActiveText: #f4f4f5;
$menuBg: #1b2a47;
$menuHover: #2a395b;
$subMenuBg: #1b2a47;
$subMenuHover: #2a395b;

@include merge-style(
  $subMenuActiveText,
  $menuBg,
  $menuHover,
  $subMenuBg,
  $subMenuHover
);
</style>