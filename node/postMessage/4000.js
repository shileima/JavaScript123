const Koa = require('koa')
const app = new Koa()
const server = require('koa-static')

app.use(server(__dirname))

app.listen(4000, () => {
    console.log(`Server listen at port 4000`)
})