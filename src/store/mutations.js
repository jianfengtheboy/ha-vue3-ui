export default {
  // 登录成功
  loginSuccess(state) {
    state.hasLogin = true
    sessionStorage.setItem('hasLogin', true)
  },
  // 退出登陆
  logout(state) {
    state.hasLogin = false
    sessionStorage.removeItem('hasLogin')
    location.reload()
  }
}
