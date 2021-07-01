<template>
  <div class="radio-container">
    <div class="demo-title">基础用法</div>
    <div class="demo-block">
      <div class="demo-source">
        <el-radio v-model="baseRadio" label="1">备选项</el-radio>
        <el-radio v-model="baseRadio" label="2">备选项</el-radio>
      </div>
    </div>

    <div class="demo-title">禁用状态</div>
    <div class="demo-block">
      <div class="demo-source">
        <el-radio disabled v-model="disabledRadio" label="禁用">备选项</el-radio>
        <el-radio disabled v-model="disabledRadio" label="选中且禁用">备选项</el-radio>
      </div>
    </div>

    <div class="demo-title">单选框组</div>
    <div class="demo-block">
      <div class="demo-source">
        <el-radio-group v-model="groupRadio">
          <el-radio :label="3">备选项</el-radio>
          <el-radio :label="6">备选项</el-radio>
          <el-radio :label="9">备选项</el-radio>
        </el-radio-group>
      </div>
    </div>

    <div class="demo-title">按钮样式</div>
    <div class="demo-block">
      <div class="demo-source">
        <div>
          <el-radio-group v-model="largeRadio">
            <el-radio-button label="上海"></el-radio-button>
            <el-radio-button label="北京"></el-radio-button>
            <el-radio-button label="广州"></el-radio-button>
            <el-radio-button label="深圳"></el-radio-button>
          </el-radio-group>
        </div>
        <div style="margin-top: 20px">
          <el-radio-group v-model="mediumRadio" size="medium">
            <el-radio-button label="上海" ></el-radio-button>
            <el-radio-button label="北京"></el-radio-button>
            <el-radio-button label="广州"></el-radio-button>
            <el-radio-button label="深圳"></el-radio-button>
          </el-radio-group>
        </div>
        <div style="margin-top: 20px">
          <el-radio-group v-model="smallRadio" size="small">
            <el-radio-button label="上海"></el-radio-button>
            <el-radio-button label="北京" disabled ></el-radio-button>
            <el-radio-button label="广州"></el-radio-button>
            <el-radio-button label="深圳"></el-radio-button>
          </el-radio-group>
        </div>
        <div style="margin-top: 20px">
          <el-radio-group v-model="miniRadio" disabled size="mini">
            <el-radio-button label="上海"></el-radio-button>
            <el-radio-button label="北京"></el-radio-button>
            <el-radio-button label="广州"></el-radio-button>
            <el-radio-button label="深圳"></el-radio-button>
          </el-radio-group>
        </div>
      </div>
    </div>

    <div class="demo-title">带有边框</div>
    <div class="demo-block">
      <div class="demo-source">
        <div>
          <el-radio v-model="radio1" label="1" border>备选项1</el-radio>
          <el-radio v-model="radio1" label="2" border>备选项2</el-radio>
        </div>
        <div style="margin-top: 20px">
          <el-radio v-model="radio2" label="1" border size="medium">备选项1</el-radio>
          <el-radio v-model="radio2" label="2" border size="medium">备选项2</el-radio>
        </div>
        <div style="margin-top: 20px">
          <el-radio-group v-model="radio3" size="small">
            <el-radio label="1" border>备选项1</el-radio>
            <el-radio label="2" border disabled>备选项2</el-radio>
          </el-radio-group>
        </div>
        <div style="margin-top: 20px">
          <el-radio-group v-model="radio4" size="mini" disabled>
            <el-radio label="1" border>备选项1</el-radio>
            <el-radio label="2" border>备选项2</el-radio>
          </el-radio-group>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'haRadio',
  setup() {
    const baseRadio = ref('1')
    const disabledRadio = ref('选中且禁用')
    const groupRadio = ref(3)
    const largeRadio = ref('上海')
    const mediumRadio = ref('上海')
    const smallRadio = ref('上海')
    const miniRadio = ref('上海')
    const radio1 = ref('1')
    const radio2 = ref('1')
    const radio3 = ref('1')
    const radio4 = ref('1')

    return {
      baseRadio,
      disabledRadio,
      groupRadio,
      largeRadio,
      mediumRadio,
      smallRadio,
      miniRadio,
      radio1,
      radio2,
      radio3,
      radio4
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/styles/mixin.scss'; 

.radio-container {
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
