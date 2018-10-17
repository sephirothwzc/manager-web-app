/*
 * form常用辅助类
 * @Author: 吴占超
 * @Date: 2018-10-13 13:12:36
 * @Last Modified by: 吴占超
 * @Last Modified time: 2018-10-17 19:05:51
 */
import i18n from '../i18n'

/**
 * form常用工具类
 *
 * @export
 * @class FormUtils
 */
export default class FormUtils {
  /**
   * 值不允许为空
   *
   * @param {Object,Array}} value
   * @returns
   *
   * @memberOf FormUtils
   */
  isBlank(value) {
    if (value instanceof Array) {
      return !(value && value.length > 0)
    }
    return !value
  }
  /**
   * 校验规则生成 规则叠加生成
   *
   * @returns
   *
   * @memberOf FormUtils
   */
  rules(param = { required: true, length: 0 }) {
    // 基础校验
    let rules = []
    // 非空校验
    !param.required || rules.push(v => !this.isBlank(v) || i18n.t('roules.required'))
    // 长度校验
    param.length <= 0 ||
      rules.push(
        v => this.isBlank(v) || (v && v.length >= param.length) || `${i18n.t('roules.length')}${param.length}`
      )
    return rules
  }
}
