<template>
  <div class="layout-container">
    <!-- 侧边栏 -->
    <side-bar></side-bar>
    <!-- 主内容区域 -->
    <div class="main-container">
      <!-- 顶部导航栏 -->
      <nav-bar></nav-bar>
      <!-- 主体内容 -->
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import sideBar from './components/sideBar.vue'
import navBar from './components/navbar.vue'
import appMain from './components/appMain.vue'

export default defineComponent({
  name: 'Layout',
  components: {
    sideBar,
    navBar,
    appMain
  },
  setup() {

  }
})
</script>

<style lang="scss" scoped>

.layout-container {
  position: relative;
  width: 100%;
  height: 100%;

  .main-container {
    height: 100%;
    margin-left: 210px;
    position: relative;
  }
}
</style>
