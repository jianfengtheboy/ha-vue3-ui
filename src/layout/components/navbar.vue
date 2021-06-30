<template>
  <div class="navbar-container">
    <div class="right-menu">
      <div
        class="inter"
        @click="toggleLang"
      >
        <img :src="langs ? ch : en" />
      </div>
      <i class="el-icon-setting hsset"></i>
      <!-- 退出登陆 -->
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          <img :src="favicon" />
          <p>{{ username }}</p>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item icon="el-icon-switch-button" @click="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import ch from "../../assets/images/ch.png"
import en from "../../assets/images/en.png"
import favicon from "/favicon.ico"
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'navbar',
  setup() {
    const router = useRouter()
    const store = useStore()

    let langs = ref(true)
    let username = 'admin'

    // 国际化语言切换
    const toggleLang = () => {
      langs.value = !langs.value
    }

    // 退出登陆
    const logout = () => {
      store.commit('logout')
      router.push('/login')
    }

    return {
      langs,
      toggleLang,
      username,
      ch,
      en,
      favicon,
      logout
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/styles/mixin.scss'; 

.navbar-container {
  width: 100%;
  height: 50px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .right-menu {
    position: absolute;
    right: 0;
    display: flex;
    align-items: center;
    height: 50px;
    line-height: 50px;

    .inter {
      width: 40px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      &:hover {
        cursor: pointer;
        background: #f0f0f0;
      }
      img {
        width: 25px;
      }
    }
    .hsset {
      width: 40px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin-right: 5px;
      &:hover {
        cursor: pointer;
        background: #f0f0f0;
      }
    }
    .el-dropdown-link {
      width: 70px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin-right: 10px;
      cursor: pointer;

      p {
        font-size: 14px;
      }

      img {
        width: 22px;
        height: 22px;
      }
    }
  }
}
</style>
