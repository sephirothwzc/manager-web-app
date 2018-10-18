/*
 * main 主页面使用vuex
 * @Author: 吴占超
 * @Date: 2018-10-18 16:30:40
 * @Last Modified by: 吴占超
 * @Last Modified time: 2018-10-18 21:20:32
 */
import jslinq from 'jslinq'
/**
 * 校验key为必填
 *
 */
function validKey() {
  throw new Error(`Missing parameter[key]`)
}
export default {
  namespaced: true,
  // module assets
  state: {
    // 加载状态
    ajaxLoad: false,
    // ajax正在加载的项目
    loadingItem: []
  },
  getters: {
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
      state.loadingItem = jslinq(state.loadingItem)
        .where(p => p !== key)
        .toList()
      state.ajaxLoad = state.loadingItem.length > 0
    }
  },
  actions: {
    startAjax(context, key = validKey()) {
      context.commit('startAjax', key)
    },
    endAjax(context, key = validKey()) {
      context.commit('endAjax', key)
    }
  }
}
