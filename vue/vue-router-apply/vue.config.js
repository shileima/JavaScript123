/* 基于node node不支持import 会覆盖webpack配置*/

let path = require('path');
module.exports = {
  publicPath:process.env.NODE_ENV === 'production' ? 'http://www.nodejs8.com.cn' : '/',
  assetsDir:'assets',
  outputDir:'my-dist',
  runtimeCompiler:false, // 使用模板，一般不适用 默认false
  productionSourceMap: false, // 打包时候不添加 .map文件，适用上线
  chainWebpack:config=>{
    // get webpack config and fix it as my logic
    // config 
    config.resolve.alias.set('+',path.resolve(__dirname,'src'))
  },
  configureWebpack: {
    plugins:[],
    module:{}
  },
  devServer:{
    proxy:{
      '/api':{
        target:'http://www.nodejs.com.cn:3000',
        changeOrigin:true
      }
    }
  }

}