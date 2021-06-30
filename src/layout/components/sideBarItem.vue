<template>
  <div v-if="!item.hidden" class="sidebar-item">
    <template v-if="hasOneShowingChild(item.children, item) && (!onlyOneChild.children || onlyOneChild.noShowingChildren)">
      <app-link v-if="onlyOneChild.meta" :to="resolvePath(onlyOneChild)">
        <el-menu-item
          :index="resolvePath(onlyOneChild)"
          :class="{ 'submenu-title-noDropdown': !isNest }"
        >
          <i :class="onlyOneChild.meta.icon || (item.meta && item.meta.icon)" />
          <template #title>
            <span>{{ onlyOneChild.meta.title }}</span>
          </template>
        </el-menu-item>
      </app-link>
    </template>

    <el-submenu v-else ref="subMenu" :index="resolvePath(item)" popper-append-to-body>
      <template #title>
        <i :class="item.meta.icon"></i>
        <span>{{ item.meta.title }}</span>
      </template>
      <side-bar-item
        v-for="(child, index) in item.children"
        :key="index"
        :is-nest="true"
        :item="child"
        :base-path="child.path"
        class="nest-menu"
      />
    </el-submenu>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import appLink from './appLink.vue'

export default defineComponent({
  name: 'sideBarItem',
  components: {
    appLink
  },
  props: {
    item: {
      type: Object,
      required: true
    },
    isNest: {
      type: Boolean,
      default: false
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const onlyOneChild = ref({})

    function hasOneShowingChild(children = [], parent) {
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          // 不显示hidden属性为true的菜单
          return false
        } else {
          onlyOneChild.value = item
          return true
        }
      })

      if (showingChildren.length === 1) {
        return true
      }

      if (showingChildren.length === 0) {
        onlyOneChild.value = { ...parent, path: '', noShowingChildren: true }
        return true
      }
      return false
    }

    const resolvePath = (routePath) => {
      return props.basePath === '/' ? routePath.path : props.basePath
    }

    return {
      hasOneShowingChild,
      onlyOneChild,
      resolvePath
    }
  }
})
</script>
