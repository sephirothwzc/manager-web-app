/*
 * view对应路由
 * @Author: 吴占超
 * @Date: 2018-10-19 14:36:44
 * @Last Modified by: 吴占超
 * @Last Modified time: 2018-11-04 21:04:07
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
        path: 'sys-user-manager/item',
        component: () => import('../views/system/sys-user/SysUserItem.vue')
      },
      {
        path: 'sys-role-manager',
        component: () => import('../views/system/sys-role/SysRoleManager.vue')
      }
    ]
  }
]
