/*
 * 路由守卫
 * @Author: 吴占超
 * @Date: 2018-11-01 21:48:15
 * @Last Modified by: 吴占超
 * @Last Modified time: 2018-11-01 22:27:17
 */
import vueRouter from '../router.js'

// 注册全局守卫
vueRouter.beforeEach((to, from, next) => {
  // 登陆不校验
  if (to.path === '/login') {
    return next()
  }
  // 非登陆接口不包含登陆信息 跳转登陆
  if (!(window.vm && window.vm.$store.getters['Main/User'])) {
    return next('/login')
  }
  next()
})
