/* 此文件是结合 AJAX/jsonp/koa-jsonp.html 来实现跨域请求 */
const Koa = require('koa')
const app = new Koa()

app.use(async(ctx, next) => {
    let { wd, cb } = ctx.request.query
    ctx.body = `${cb}("我不爱你...来自服务器./node/koa-jsonp.js")`
})

app.listen(4000, () => {
    console.log(`Server listen at port 4000`)
})