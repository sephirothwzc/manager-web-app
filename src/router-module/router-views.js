/*
 * view对应路由
 * @Author: 吴占超
 * @Date: 2018-10-19 14:36:44
 * @Last Modified by: 吴占超
 * @Last Modified time: 2018-10-19 16:32:02
 */
import Main from '../pages/Main.vue'
export default [
  {
    path: '/system',
    component: Main,
    children: [
      {
        path: 'sys-user-manager',
        component: () => import('../views/system/sys-user/SysUserManager.vue')
      },
      {
        path: 'sys-role-manager',
        component: () => import('../views/system/sys-role/SysRoleManager.vue')
      }
    ]
  }
]
