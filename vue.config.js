/*
 * @Author: 吴占超
 * @Date: 2018-09-20 20:05:17
 * @Last Modified by: 吴占超
 * @Last Modified time: 2018-10-21 20:38:56
 * vue配置文件
 */
module.exports = {
  // 基本路径
  baseUrl: '/',
  // 输出文件目录
  outputDir: 'dist',
  devServer: {
    // 前端端口
    port: 8089,
    // 代理地址
    proxy: 'http://localhost:8088'
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
