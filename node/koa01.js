const Koa = require('koa');
const app = new Koa();
const logger = require('koa-logger');
const KeyGrip = require("keygrip");

Object.defineProperty(app.context, 'host', {
    get: function() {
        return '0.0.0.0'
    },
    set: function(newValue) {
        console.log('你要赋值给我;')
    }
});
// app.context.host = '120,120,120,127'; // 无效赋值
// app.ctx.host = '111,111,111,111'; // 出错！无效赋值
Object.defineProperty(app.context, 'db', {
    get: function(){
        return '这里是通过app.context给ctx增加属性和'
    },
});
app.use(async (ctx, next) => {
    if(ctx.path === '/favicon.ico'){return;}
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})
// koa-logger
app.use(logger())
// response
app.use(async ctx => {
    if(ctx.request.url == '/favicon.ico'){
        return;
    }
    ctx.body = ctx;
    console.log('app.env:',app.env)
    console.log('headers:',ctx.headers)   // 
    console.log('app.context.host:',app.context.host)   // 0,0,0,0
    console.log('app.ctx.host:',app.ctx.host)   // 
    console.log('ctx:',ctx.db)     // 这里是通过app.context给ctx增加属性和方法
    console.log('app:',app)
    console.log('app.callback:',app.callback)
    console.log('app.callback():',app.callback())
    app.keys = new KeyGrip(['im loading', 'i like coding'], 'sha256');
    console.log('app.keys:',app.keys)
});

app.listen(3000, ()=> {
    console.log('server running at port 3000')
});