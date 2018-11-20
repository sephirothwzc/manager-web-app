/*
 * view对应路由
 * @Author: 吴占超
 * @Date: 2018-10-19 14:36:44
 * @Last Modified by: 吴占超
 * @Last Modified time: 2018-11-20 21:21:05
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
      },
      // 数据字典
      {
        path: 'sys-data-dictionary',
        component: () =>
          import('../views/system/sys-data-dictionary/SysDataDictionary.vue')
      }
    ]
  },
  {
    path: '/app-manager',
    component: Main,
    children: [
      {
        // 主页广告管理
        path: 'advert-manager',
        component: () => import('../views/app-manager/AdvertiseManager.vue')
      },
      {
        // 主页广告新增
        path: 'advert-manager/add',
        component: () => import('../views/app-manager/AdvertisementItem.vue')
      },
      {
        // 主页广告修改
        path: 'advert-manager/upd/:id',
        component: () => import('../views/app-manager/AdvertisementItem.vue')
      }
    ]
  }
]
