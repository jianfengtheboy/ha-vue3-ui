<template>
  <div class="transition-container">
    <div class="demo-title">fade 淡入淡出</div>
    <div class="demo-block">
      <div class="demo-source">
        <el-button @click="fadeShow = !fadeShow">Click Me</el-button>

        <div class="demo-content">
          <transition name="el-fade-in-linear">
            <div v-show="fadeShow" class="transition-box">.el-fade-in-linear</div>
          </transition>
          <transition name="el-fade-in">
            <div v-show="fadeShow" class="transition-box">.el-fade-in</div>
          </transition>
        </div>
      </div>
    </div>

    <div class="demo-title">zoom 缩放</div>
    <div class="demo-block">
      <div class="demo-source">
        <el-button @click="zoomShow = !zoomShow">Click Me</el-button>

        <div class="demo-content">
          <transition name="el-zoom-in-center">
            <div v-show="zoomShow" class="transition-box">.el-zoom-in-center</div>
          </transition>

          <transition name="el-zoom-in-top">
            <div v-show="zoomShow" class="transition-box">.el-zoom-in-top</div>
          </transition>

          <transition name="el-zoom-in-bottom">
            <div v-show="zoomShow" class="transition-box">.el-zoom-in-bottom</div>
          </transition>
        </div>
      </div>
    </div>

    <div class="demo-title">collapse 展开折叠</div>
    <div class="demo-block">
      <div class="demo-source">
        <el-button @click="collapseShow = !collapseShow">Click Me</el-button>

        <div class="demo-collapse">
          <el-collapse-transition>
            <div v-show="collapseShow">
              <div class="transition-box">el-collapse-transition</div>
              <div class="transition-box">el-collapse-transition</div>
            </div>
          </el-collapse-transition>
        </div>
      </div>
    </div>
  
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'haTransition',
  setup() {
    const fadeShow = ref(true)
    const zoomShow = ref(true)
    const collapseShow = ref(true)

    return {
      fadeShow,
      zoomShow,
      collapseShow
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/styles/mixin.scss'; 

.transition-container {
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

    .demo-content {
      display: flex;
      margin-top: 20px;
      height: 100px;
    }

    .transition-box {
      margin-bottom: 10px;
      width: 200px;
      height: 100px;
      @include border-radius(4px);
      background-color: #409eff;
      text-align: center;
      color: #fff;
      padding: 40px 20px;
      margin-right: 20px;
      @include box-sizing();
    }

    .demo-collapse {
      margin-top: 20px;
      height: 200px;
    }
  }
}
</style>
