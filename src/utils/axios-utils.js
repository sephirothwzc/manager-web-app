/*
 * ajax axios utils
 * @Author: 吴占超
 * @Date: 2018-10-15 13:20:20
 * @Last Modified by: 吴占超
 * @Last Modified time: 2018-10-24 13:12:05
 */
import _ from 'lodash'
import Qs from 'qs'

export default class AxiosUtils {
  /**
   * 扩展方法
   *
   * @static
   * @param {Object} _axios
   *
   * @memberOf AxiosUtils
   */
  extend(_axios) {
    _axios.extendGet = this.extendGet
  }
  /**
   * 扩展get请求参数url化
   *
   * @param {String} url
   * @param {Object} urlParam
   * @returns
   *
   * @memberOf AxiosUtils
   */
  extendGet(url, urlParam) {
    /**
     * 对象属性为空的不进行传递
     */
    !urlParam ||
      _(Object.keys(urlParam))
        .filter(p => !urlParam[p])
        .map(p => delete urlParam[p])
        .value()
    /**
     * 提交对象为get url 参数
     */
    return this.get(url, {
      params: urlParam,
      paramsSerializer: function(params) {
        return Qs.stringify(params, { arrayFormat: 'repeat' })
      }
    })
  }
}
