/*
 * @Author: 吴占超
 * @Date: 2018-09-20 20:05:17
 * @Last Modified by: 吴占超
 * @Last Modified time: 2018-10-03 17:31:42
 * vue配置文件
 */
module.exports = {
  // ,
  // pluginOptions: {
  //   'serve-api-mocks': {
  //     base: '/mocks-api'
  //   }
  // }
  devServer: {
    // 前端端口
    port: 8089,
    // 代理地址
    proxy: 'http://localhost:8081'
  },

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  }
}
