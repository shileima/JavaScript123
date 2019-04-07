/* 基于node node不支持import 会覆盖webpack配置*/

let path = require('path');
module.exports = {
  publicPath:process.env.NODE_ENV === 'production' ? 'http://www.nodejs8.com.cn' : '/',
  assetsDir:'assets',
  outputDir:'./dist',

  // 使用模板，一般不适用 默认false
  runtimeCompiler:false,

  // 打包时候不添加 .map文件，适用上线
  productionSourceMap: false,

  chainWebpack:config=>{
    // get webpack config and fix it as my logic
    // config 
    config.resolve.alias.set('+',path.resolve(__dirname,'src/components'))
  },

  configureWebpack: {
    plugins:[],
    module:{}
  },

  devServer:{
    proxy:{
      '/api':{
        target:'http://localhost:3000',
        changeOrigin:true,
        ws:true,
        pathRewrite:{
          '/api':'/api/getUser'
        }
      }
    }
  },

  //自动注入公共加载的文件
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname,'src/assets/common.less')
      ]
    }
  }
}
