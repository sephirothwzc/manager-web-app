/*
 * main 主页面使用vuex
 * @Author: 吴占超
 * @Date: 2018-10-18 16:30:40
 * @Last Modified by: 吴占超
 * @Last Modified time: 2018-10-24 16:06:39
 */
import _ from 'lodash'
import { validKey } from '../utils/common-utils'
import StorageUtils from '../utils/storage-utils.js'
export default {
  namespaced: true,
  // module assets
  state: {
    // 加载状态
    ajaxLoad: false,
    // ajax正在加载的项目
    loadingItem: [],
    // 当前登陆人
    user: undefined
  },
  getters: {
    /**
     * 获取当前登陆用户
     *
     * @returns
     */
    User(state, getters) {
      let user = StorageUtils.getSessionItem('loginUser')
      if (!state.user && user) {
        state.user = user
      }
      return state.user
    },
    /**
     * ajax 加载状态
     *
     * @param {any} state
     * @returns Boolean
     */
    AjaxLoad(state) {
      return state.ajaxLoad
    }
  },
  mutations: {
    /**
     * 请求启动
     *
     * @param {any} state
     * @param {any} key
     */
    startAjax(state, key) {
      state.loadingItem.push(key)
      state.ajaxLoad = state.loadingItem.length > 0
    },
    /**
     * 请求结束
     *
     * @param {any} state
     * @param {any} key
     */
    endAjax(state, key) {
      state.loadingItem = _(state.loadingItem)
        .filter(p => p !== key)
        .value()
      state.ajaxLoad = state.loadingItem.length > 0
    },
    /**
     * 登陆成功
     *
     * @param {any} state
     * @param {any} [user=validKey()]
     */
    loginSuccess(state, user = validKey()) {
      state.user = user
    },
    /**
     * 退出
     *
     * @param {any} state
     */
    logoutSuccess(state) {
      state.user = undefined
    }
  },
  actions: {
    startAjax(context, key = validKey()) {
      context.commit('startAjax', key)
    },
    endAjax(context, key = validKey()) {
      context.commit('endAjax', key)
    },
    /**
     * 登陆成功方法
     *
     * @param {any} context
     * @param {any} user
     */
    loginSuccess(context, user = validKey()) {
      StorageUtils.setSessionItem('loginUser', user)
      context.commit('loginSuccess', user)
    },
    /**
     * 清空登陆人
     *
     * @param {any} context
     */
    logoutSuccess(context) {
      StorageUtils.clearSession('loginUser')
      context.commit('logoutSuccess')
    }
  }
}
