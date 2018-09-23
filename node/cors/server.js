const Koa = require('koa')
const app = new Koa()
const server = require('koa-static')

app.use(server(__dirname))

/* app.use(async(ctx, next) => {
    ctx.body = `我不爱你...来自服务器./node/koa-cors.js`
}) */

app.listen(4000, () => {
    console.log(`Server listen at port 4000`)
})