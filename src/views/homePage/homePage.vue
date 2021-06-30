<template>
  <div class="homepage-container">
    <div class="top-content">
      <div class="left-mark">
        <img src="https://avatars.githubusercontent.com/u/30546756?s=400&v=4" />
        <span>{{ greetings }}</span>
      </div>
      <flop />
    </div>

    <!-- 图表 -->
    <!-- <el-card class="box-card">
      <el-skeleton style="height: 50vh" :rows="8" :loading="loading" animated>
        <template #default>
          <div id="brokenLine"></div>
        </template>
      </el-skeleton>
    </el-card> -->
  </div>
</template>

<script>
import { computed, defineComponent } from 'vue'
import flop from '@/components/flop/flop.vue'

export default defineComponent({
  name: 'homePage',
  components: {
    flop
  },
  setup() {
    let date = new Date()

    let greetings = computed(() => {
      if (date.getHours() >= 0 && date.getHours() < 12) {
        return "上午阳光明媚，祝你薪水翻倍🌞！"
      } else if (date.getHours() >= 12 && date.getHours() < 18) {
        return "下午小风娇好，愿你青春不老😃！"
      } else {
        return "折一根天使羽毛，愿拂去您的疲惫烦恼忧伤🌛！"
      }
    })

    return {
      greetings
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/styles/mixin.scss'; 

.homepage-container {
  width: 100%;
  height: calc(100% - 1px);
  margin-top: 1px;

  .top-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 120px;
    background: #fff;
    padding: 20px;
    border-bottom: 0.5px solid rgba($color: #ccc, $alpha: 0.3);
    .left-mark {
      display: flex;
      align-items: center;
      img {
        display: block;
        width: 72px;
        height: 72px;
        border-radius: 50%;
        margin-right: 10px;
        cursor: pointer;
      }
    }
  }
}
</style>
