import '@babel/polyfill'
import Vue from 'vue'
import './plugins/axios'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@fortawesome/fontawesome-free/css/all.css'
import i18n from './i18n'
// toasted https://github.com/shakee93/vue-toasted
import Toasted from 'vue-toasted'

if (process.env.NODE_ENV === 'development') {
  // dev
  require('./mock')
}
// 加载插件
Vue.use(Toasted)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
