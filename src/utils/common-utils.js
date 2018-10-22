/*
 * 常用公共方法集合
 * @Author: 吴占超
 * @Date: 2018-10-20 10:20:39
 * @Last Modified by: 吴占超
 * @Last Modified time: 2018-10-22 21:39:33
 */

/**
 * 校验key为必填
 *
 */
export function validKey(paramKey = 'key') {
  throw new Error(`Missing parameter[${paramKey}]`)
}
