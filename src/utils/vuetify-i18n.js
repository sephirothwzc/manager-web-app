/*
 * vuetify 多语言
 * @Author: 吴占超
 * @Date: 2018-10-24 14:14:02
 * @Last Modified by: 吴占超
 * @Last Modified time: 2018-10-24 14:31:37
 */
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import _ from 'lodash'

Vue.use(VueI18n)

function loadLocaleMessages() {
  const locales = require.context(
    '../locales',
    true,
    /vuetify_[A-Za-z0-9-_,\s]+\.js$/i
  )
  const messages = {}
  locales.keys().forEach(key => {
    const matched = _.replace(key, 'vuetify_', '').match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      messages[locale] = locales(key).default
    }
  })
  return messages
}

export default new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || 'zh_cn',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages: loadLocaleMessages()
})
