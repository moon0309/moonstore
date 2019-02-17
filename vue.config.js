const path = require('path')

// const resolve = dir => {
//   return path.join(__dirname, dir)
// }
// 可以简写成如下形式

const resolve = dir => path.join(__dirname, dir)

const BASE_URL = process.env.NODE_ENV === 'prodution' ? './iview-admin/' : '/'

module.exports = {
  lintOnSave: false,

  baseUrl: BASE_URL, // 定义项目的基本路径

  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src')) // 当前路径拼接上src,@代表src路径
      .set('_c', resolve('src/components'))
  },
  // 打包时不生成.map文件
  productionSourceMap: false,
  // 跨域配置
  devServer: {
    proxy: 'http://localhost:4000'
  }
}
