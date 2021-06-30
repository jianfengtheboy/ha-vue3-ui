/*
 * @Author: Sun
 * @LastEditors: Sun
 * @Email: jianfengtheboy@163.com
 * @Date: 2021-06-27 14:07:28
 * @LastEditTime: 2021-06-27 22:06:43
 */
export default {
  // 登录成功
  loginSuccess(state) {
    state.hasLogin = true
    localStorage.setItem('hasLogin', true)
  },
  // 退出登陆
  logout(state) {
    state.hasLogin = false
    localStorage.removeItem('hasLogin')
    location.reload()
  }
}
