let path = require('path');
module.exports = {
    publicPath:process.env.NODE_ENV === 'production' ? 'http://vue.nodejs8.com.cn' : './',
    assetsDir:'assets',
    outputDir:'./dist',
    runtimeCompiler:true, // 使用模板方式,就是App.vue可以使用 template 渲染模板
    productionSourceMap:false, // 不打包 js/ 下的 .map 文件
    chainWebpack:config=>{
        //console.log(config)
        // 获取原webpack 的配置并可以增加自己的逻辑
        config.resolve.alias.set('+',path.resolve(__dirname,'src/components'))
    }
}