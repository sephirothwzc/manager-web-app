/*
 * view对应路由
 * @Author: 吴占超
 * @Date: 2018-10-19 14:36:44
 * @Last Modified by: 吴占超
 * @Last Modified time: 2018-11-12 21:10:53
 */
import Main from '../pages/Main.vue'
export default [
  {
    path: '/googleContacts',
    component: () => import('../pages/googleContacts.vue')
  },
  {
    path: '/system',
    component: Main,
    children: [
      {
        path: 'sys-user-manager',
        component: () => import('../views/system/sys-user/SysUserManager.vue')
      },
      {
        path: 'sys-user-manager/add',
        component: () => import('../views/system/sys-user/SysUserItem.vue')
      },
      {
        path: 'sys-user-manager/upd/:id',
        component: () => import('../views/system/sys-user/SysUserItem.vue')
      },
      {
        path: 'sys-role-manager',
        component: () => import('../views/system/sys-role/SysRoleManager.vue')
      }
    ]
  },
  {
    path: '/app-manager',
    component: Main,
    children: [
      {
        // 主页管理
        path: 'home-manager',
        component: () => import('../views/app-manager/HomeManager.vue')
      }
    ]
  }
]
