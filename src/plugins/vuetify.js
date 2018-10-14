import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import zhHans from 'vuetify/es5/locale/zh-Hans'
// 图标icon引入 需要使用sass-load
// npm install sass-loader -D
// npm install node-sass -D
import 'material-design-icons-iconfont'

Vue.use(Vuetify, {
  theme: {
    primary: '#ee44aa',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  },
  customProperties: true,
  iconfont: 'fa',
  lang: {
    locales: { zhHans },
    current: 'zh-Hans'
  }
})
