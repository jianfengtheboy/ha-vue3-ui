<template>
  <div class="space-container">
    <div class="demo-title">基础用法</div>
    <div class="demo-block">
      <div class="demo-source">
        <el-space wrap>
          <el-card class="box-card" style="width: 250px" v-for="i in 3" :key="i">
            <template #header>
              <div class="card-header">
                <span>Card name</span>
                <el-button class="button" type="text">Operation button</el-button>
              </div>
            </template>
            <div v-for="o in 4" :key="o" class="text item">
              {{ 'List item ' + o }}
            </div>
          </el-card>
        </el-space>
      </div>
    </div>

    <div class="demo-title">垂直布局</div>
    <div class="demo-block">
      <div class="demo-source">
        <el-space direction="vertical">
          <el-card class="box-card" style="width: 250px" v-for="i in 2" :key="i">
            <template #header>
              <div class="card-header">
                <span>Card name</span>
                <el-button class="button" type="text">Operation button</el-button>
              </div>
            </template>
            <div v-for="o in 4" :key="o" class="text item">
              {{ 'List item ' + o }}
            </div>
          </el-card>
        </el-space>
      </div>
    </div>

    <div class="demo-title">控制间距的大小</div>
    <div class="demo-block">
      <div class="demo-source">
        <el-space direction="vertical" alignment="start" :size="30">
          <el-radio-group v-model="size">
            <el-radio :label="'mini'">迷你</el-radio>
            <el-radio :label="'small'">小</el-radio>
            <el-radio :label="'medium'">中等</el-radio>
            <el-radio :label="'large'">大号</el-radio>
          </el-radio-group>

          <el-space wrap :size="size">
            <el-card class="box-card" style="width: 250px" v-for="i in 3" :key="i">
              <template #header>
                <div class="card-header">
                  <span>Card name</span>
                  <el-button class="button" type="text">Operation button</el-button>
                </div>
              </template>
              <div v-for="o in 4" :key="o" class="text item">
                {{ 'List item ' + o }}
              </div>
            </el-card>
          </el-space>
        </el-space>
      </div>
    </div>

    <div class="demo-title">自定义 Size</div>
    <div class="demo-block">
      <div class="demo-source">
        <el-slider v-model="customSize" />
        <el-space wrap :size="customSize">
          <el-card class="box-card" style="width: 250px" v-for="i in 2" :key="i">
            <template #header>
              <div class="card-header">
                <span>Card name</span>
                <el-button class="button" type="text">Operation button</el-button>
              </div>
            </template>
            <div v-for="o in 4" :key="o" class="text item">
              {{ 'List item ' + o }}
            </div>
          </el-card>
        </el-space>
      </div>
    </div>

    <div class="demo-title">自动换行</div>
    <div class="demo-block">
      <div class="demo-source">
        <el-space wrap>
          <div v-for="i in 40" :key="i">
            <el-button type="text">
              文字按钮
            </el-button>
          </div>
        </el-space>
      </div>
    </div>

    <div class="demo-title">行间分隔符</div>
    <div class="demo-block">
      <div class="demo-source">
        <el-space :size="spacerSize" spacer="|">
          <div v-for="i in 2" :key="i">
            <el-button>
              button {{ i }}
            </el-button>
          </div>
        </el-space>
      </div>
    </div>

    <div class="demo-title">对齐方式</div>
    <div class="demo-block">
      <div class="demo-source">
        <div style="width: 240px;margin-bottom: 20px;padding: 8px;border: 1px solid #ccc;">
          <el-space>
            string
            <el-button>
              button
            </el-button>
            <el-card>
              <template #header>
                header
              </template>
              body
            </el-card>
          </el-space>
        </div>
        <div style="width: 240px;margin-bottom: 20px;padding: 8px;border: 1px solid #ccc;">
          <el-space alignment="flex-start">
            string
            <el-button>
              button
            </el-button>
            <el-card>
              <template #header>
                header
              </template>
              body
            </el-card>
          </el-space>
        </div>
        <div style="width: 240px;margin-bottom: 20px;padding: 8px;border: 1px solid #ccc;">
          <el-space alignment="flex-end">
            string
            <el-button>
              button
            </el-button>
            <el-card>
              <template #header>
                header
              </template>
              body
            </el-card>
          </el-space>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'haSpace',
  setup() {
    const size = ref('mini')
    const customSize = ref(20)
    const spacerSize = ref(10)

    return {
      size,
      customSize,
      spacerSize
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/styles/mixin.scss'; 

.space-container {
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

  }
}
</style>

