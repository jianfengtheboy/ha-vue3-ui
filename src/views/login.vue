<template>
  <div class="login-container">
    <div class="login-info">
      <el-form :model="ruleForm" :rules="rules" ref="loginForm" class="rule-form">
        <el-form-item prop="userName">
          <el-input
            v-model.trim="ruleForm.userName"
            placeholder="请输入用户名"
            prefix-icon="el-icon-user">
          </el-input>
        </el-form-item>
        <el-form-item prop="passWord">
          <el-input
            maxlength="6"
            type="password"
            show-password
            v-model.trim="ruleForm.passWord"
            placeholder="请输入密码"
            prefix-icon="el-icon-lock">
          </el-input>
        </el-form-item>
        <el-form-item prop="verify">
          <el-input
            maxlength="6"
            onkeyup="this.value=this.value.replace(/[^\d.]/g,'');"
            v-model.number="ruleForm.verify"
            placeholder="请输入验证码">
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click.prevent="onBehavior">登录</el-button>
        </el-form-item>
        <span title="直接登录" class="secret" @click="noSecret">免密登录</span>
      </el-form>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, ref, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { ElMessage } from 'element-plus'

export default defineComponent({
  name: 'login',
  setup() {
    const router = useRouter()
    const store = useStore()

    const loginForm = ref(null)
    const state = reactive({
      ruleForm: {
        userName: '',
        passWord: '',
        verify: null
      },
      rules: {
        userName: [{ required: true, message: '请输入用户名', trigger: 'change' }],
        passWord: [
          { required: true, message: '请输入密码', trigger: 'change' },
          { min: 6, message: '密码长度必须不小于6位', trigger: 'change' }
        ],
        verify: [
          { required: true, message: '请输入验证码', trigger: 'change' },
          { type: 'number', message: '验证码必须是数字类型', trigger: 'change' }
        ]
      }
    })

    const onBehavior = async () => {
      loginForm.value.validate((valid) => {
        if (valid) {
          const { userName, passWord, verify } = state.ruleForm
          if (userName !== 'admin') {
            return ElMessage.error('登陆失败，账号密码错误！')
          } else if (passWord !== '123456') {
            return ElMessage.error('登陆失败，账号密码错误！')
          } else if (verify !== 666666) {
            return ElMessage.error('登陆失败，验证码错误！')
          } else {
            ElMessage.success('登陆成功！')
            store.commit('loginSuccess')
            router.push('/')
          }
        }
      })
    }

    // 免密登录
    const noSecret = () => {
      ElMessage.success('登陆成功！')
      store.commit('loginSuccess')
      router.push('/')
    }

    return {
      ...toRefs(state),
      loginForm,
      onBehavior,
      noSecret
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/styles/mixin.scss'; 

.login-container {
  height: 100%;
  width: 100%;
  background: url('../assets/images/login-bg.png') no-repeat center;
  background-size: cover;
  overflow: hidden;
  position: relative;

  .login-info {
    width: 30vw;
    height: 48vh;
    background: url("../assets/images/login.png") no-repeat center;
    background-size: cover;
    position: absolute;
    border-radius: 20px;
    right: 100px;
    top: 30vh;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 750px) {
      width: 88vw;
      right: 25px;
      top: 22vh;
    }
    .rule-form {
      width: 80%;
      .verify {
        position: absolute;
        margin: -10px 0 0 -120px;
        &:hover {
          cursor: pointer;
        }
      }
      .tips {
        color: #409eff;
        float: right;
        &:hover {
          cursor: pointer;
        }
      }
    }
    .secret {
      color: #409eff;
      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
