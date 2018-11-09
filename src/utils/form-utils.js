/*
 * form常用辅助类
 * @Author: 吴占超
 * @Date: 2018-10-13 13:12:36
 * @Last Modified by: 吴占超
 * @Last Modified time: 2018-11-08 21:58:12
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
  rules(param = { required: true, minLength: 0, maxLength: 50 }) {
    // 基础校验
    let rules = []
    // 非空校验
    !param.required ||
      rules.push(v => !this.isBlank(v) || i18n.t('roules.required'))
    // 长度校验
    !param.minLength ||
      param.minLength <= 0 ||
      rules.push(
        v =>
          this.isBlank(v) ||
          (v && v.length >= param.minLength) ||
          `${i18n.t('roules.minLength')}${param.minLength}`
      )
    // 长度校验
    !param.maxLength ||
      param.maxLength <= 0 ||
      rules.push(
        v =>
          this.isBlank(v) ||
          (v && v.length <= param.maxLength) ||
          `${i18n.t('roules.maxLength')}${param.maxLength}`
      )
    return rules
  }
}
