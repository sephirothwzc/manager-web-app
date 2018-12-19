/* eslint-disable */
'use strict'

import Vue from 'vue'
import axios from 'axios'
import AxiosUtils from '../utils/axios-utils.js'
import ToastedUtils from '../utils/toasted-utils.js'

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let config = {
  // baseURL: process.env.baseURL || process.env.apiUrl || ""
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
}

const _axios = axios.create(config)
// #region 增加自定义扩展
new AxiosUtils().extend(_axios)
// #endregion

_axios.interceptors.request.use(
  function(config) {
    // #region 注册ajaxLoad
    window.vm.$store.dispatch('Main/startAjax', config.url)
    // #endregion
    // Do something before request is sent
    return config
  },
  function(error) {
    window.vm.$store.dispatch('Main/endAjax', error.url)
    // Do something with request error
    return Promise.reject(error)
  }
)
// Add a response interceptor
_axios.interceptors.response.use(
  response => {
    window.vm.$store.dispatch('Main/endAjax', response.config.url)
    // Do something with response data
    return response.data
  },
  error => {
    window.vm.$store.dispatch('Main/endAjax', error.config.url)
    // 自定义错误
    error.response.status === 511 &&
      window.vm.$toasted.error(
        error.response.data.message,
        ToastedUtils.ErrorOption
      )
    console.log(error.response.data)
    // Do something with response error
    return Promise.reject({
      status: error.response.status,
      data: error.response.data
    })
  }
)

Plugin.install = function(Vue, options) {
  Vue.axios = _axios
  window.axios = _axios
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios
      }
    },
    $axios: {
      get() {
        return _axios
      }
    }
  })
}

Vue.use(Plugin)

export default Plugin
