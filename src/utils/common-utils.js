/*
 * 常用公共方法集合
 * @Author: 吴占超
 * @Date: 2018-10-20 10:20:39
 * @Last Modified by: 吴占超
 * @Last Modified time: 2018-10-20 10:22:14
 */

/**
 * 校验key为必填
 *
 */
export function validKey() {
  throw new Error(`Missing parameter[key]`)
}
