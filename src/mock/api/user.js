/*
 * user webapi 用户
 * @Author: 吴占超
 * @Date: 2018-10-15 16:57:54
 * @Last Modified by: 吴占超
 * @Last Modified time: 2018-10-17 19:07:54
 */
import Mock from 'mockjs'

Mock.mock('sys-user/login', 'post', param => {
  return param.userName === 'admin' && param.passWord === 'admin'
})