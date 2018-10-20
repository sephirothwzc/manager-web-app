/*
 * user webapi 用户
 * @Author: 吴占超
 * @Date: 2018-10-15 16:57:54
 * @Last Modified by: 吴占超
 * @Last Modified time: 2018-10-20 11:22:27
 */
import Mock from 'mockjs'

/**
 * 用户登陆
 */
Mock.mock('sys-user/login', 'post', param => {
  return {
    id: 21009808789,
    userName: 'admin',
    userCode: '00001',
    realName: '蒂法',
    headPortrait: 'images/head-portrait/timg.jpeg'
  }
})

/**
 * 导航菜单
 */
Mock.mock('sys-user/navigation', 'get', param => {
  let navItems = [
    {
      icon: 'fas fa-shapes',
      title: 'system-manager',
      path: 'system',
      children: [
        { icon: 'event', title: 'sys-user-manager', path: 'sys-user-manager' },
        {
          icon: 'note',
          title: 'sys-role',
          // 二级导航如果包含子集 path是不起作用的 三级菜单情况下 二级菜单没有 to
          path: 'sys-role',
          children: [
            {
              icon: 'person',
              title: 'sys-role-manager',
              path: 'sys-role-manager'
            }
          ]
        }
      ]
    },
    {
      icon: 'fas fa-shapes',
      title: 'system-manager',
      children: [{ icon: 'event', title: 'sys-user-manager' }]
    }
  ]
  return navItems
})
