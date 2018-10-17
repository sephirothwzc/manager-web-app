/*
 * toasted utils
 * @Author: 吴占超
 * @Date: 2018-10-15 14:48:08
 * @Last Modified by: 吴占超
 * @Last Modified time: 2018-10-17 18:49:59
 */
/**
 * toasted 属性帮助
 *
 * @export
 * @class ToastedUtils
 */
export default class ToastedUtils {
  /**
   * 警告参数 属性
   *
   * @readonly
   * @static
   *
   * @memberOf ToastedUtils
   */
  static get InfoOption() {
    return {
      // 颜色
      theme: 'bubble',
      // 位置
      position: 'top-center',
      // 时间
      duration: 1000,
      // icon
      icon: 'announcement'
    }
  }

  static get ErrorOption() {
    return {
      // 位置
      position: 'top-center',
      // 时间
      duration: 5000,
      // icon
      icon: 'assignment_late'
    }
  }
}
