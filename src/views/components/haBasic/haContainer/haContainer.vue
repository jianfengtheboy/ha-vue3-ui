<template>
  <div class="container-container">
    <div class="demo-title">常见页面布局</div>
    <div class="demo-block">
      <div class="demo-source">
        <el-container>
          <el-header>Header</el-header>
          <el-main>Main</el-main>
        </el-container>

        <el-container>
          <el-header>Header</el-header>
          <el-main>Main</el-main>
          <el-footer>Footer</el-footer>
        </el-container>

        <el-container>
          <el-aside width="200px">Aside</el-aside>
          <el-main>Main</el-main>
        </el-container>

        <el-container>
          <el-header>Header</el-header>
          <el-container>
            <el-aside width="200px">Aside</el-aside>
            <el-main>Main</el-main>
          </el-container>
        </el-container>

        <el-container>
          <el-header>Header</el-header>
          <el-container>
            <el-aside width="200px">Aside</el-aside>
            <el-container>
              <el-main>Main</el-main>
              <el-footer>Footer</el-footer>
            </el-container>
          </el-container>
        </el-container>

        <el-container>
          <el-aside width="200px">Aside</el-aside>
          <el-container>
            <el-header>Header</el-header>
            <el-main>Main</el-main>
          </el-container>
        </el-container>

        <el-container>
          <el-aside width="200px">Aside</el-aside>
          <el-container>
            <el-header>Header</el-header>
            <el-main>Main</el-main>
            <el-footer>Footer</el-footer>
          </el-container>
        </el-container>

      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'haContainer',
  setup() {

  }
})
</script>

<style lang="scss" scoped>
@import '@/styles/mixin.scss'; 

.container-container {
  @include padding(20px);

  .demo-title {
    @include bold-font(22px, 400, #1f2f3d);
    margin: 40px 0 20px;

    &:first-child {
      margin-top: 0;
    }
  }

  .demo-block {
    border: 1px solid #ebebeb;
    @include border-radius(3px);
    @include transition(0.2s);

    &:hover {
      @include box-shadow(0 0 8px 0 rgb(232 237 250 / 60%), 0 2px 4px 0 rgb(232 237 250 / 50%));
    }

    .demo-source {
      @include padding(24px);
    }

    .el-container {
      margin-bottom: 40px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    .el-footer, .el-header {
      background-color: #b3c0d1;
      color: #333;
      line-height: 60px;
      text-align: center;
    }

    .el-main {
      background-color: #e9eef3;
      color: #333;
      text-align: center;
      line-height: 160px;
    }

    .el-aside {
      background-color: #d3dce6;
      text-align: center;
      line-height: 200px;
    }
  }
}
</style>