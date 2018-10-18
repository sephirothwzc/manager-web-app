/*
 * user webapi 用户
 * @Author: 吴占超
 * @Date: 2018-10-15 16:57:54
 * @Last Modified by: 吴占超
 * @Last Modified time: 2018-10-18 22:36:49
 */
import Mock from 'mockjs'

/**
 * 用户登陆
 */
Mock.mock('sys-user/login', 'post', param => {
  return param.userName === 'admin' && param.passWord === 'admin'
})

/**
 * 导航菜单
 */
Mock.mock('sys-user/navigation', 'get', param => {
  let navItems = [
    {
      icon: 'fas fa-shapes',
      title: 'system manager',
      children: [{ icon: 'event', title: 'sys-user manager' }]
    },
    {
      icon: 'fas fa-shapes',
      title: 'system manager',
      children: [{ icon: 'event', title: 'sys-user manager' }]
    }
  ]
  return navItems
})
