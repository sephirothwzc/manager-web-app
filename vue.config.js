/*
 * @Author: 吴占超
 * @Date: 2018-09-20 20:05:17
 * @Last Modified by: 吴占超
 * @Last Modified time: 2018-09-20 20:13:22
 * vue配置文件
 */
module.exports = {
  devServer: {
    // 前端端口
    port: 8089,
    // 代理地址
    proxy: 'http://localhost:8081'
  }
}
