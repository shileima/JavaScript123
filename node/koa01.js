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
app.context.host = '120,120,120,127';
Object.defineProperty(app.context, 'db', {
    get: function(){
        return '这里是通过app.context给ctx增加属性和'
    },
});
// koa-logger
app.use(logger())
// response
app.use(async ctx => {
    if(ctx.request.url == '/favicon.ico'){
        return;
    }

    ctx.body = ctx;
    console.log('app.env:',app.env)
    console.log('headers:',ctx.headers)   // 0,0,0,0
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