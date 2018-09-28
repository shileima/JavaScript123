const Koa = require('koa')
const app = new Koa()
const whiteList = ['http://localhost:4000']

app.use(async(ctx, next) => {
    let origin = ctx.request.headers.origin

    if (whiteList.includes(origin)) {
        ctx.set({
                // 允许跨域
                'Access-Control-Allow-Origin': origin,
                // 允许前端设置 headers; xhr.setRequestHeader('name', 'from loading')
                'Access-Control-Allow-Headers': 'name',
                // 允许携带 cookie
                'Access-Control-Allow-Credentials': true,
                // 允许前端获取的headers
                'Access-Control-Expose-Headers': 'setHeaderName',
                // 后端返回 headers，前端通过 xhr.getResponseHeader('setHeaderName')
                'setHeaderName': 'set header from server'
            })
            /* if (ctx.request.method === 'OPTIONS') {} */
    }

    next()
})


app.use(async(ctx, next) => {
    ctx.body = `Data from http://localhost:4001 ，./node/koa-cors.js`
})

app.listen(4001, () => {
    console.log(`Server listen at port 4001`)
})