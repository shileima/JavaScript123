const Koa       = require('koa');
const router    = require('koa-router')();

const app       = new Koa;

/*应用级中间件，async 前不能加url，例如： app.use('/news', async (ctx,next)*/
/* 第一个中间件和第二个错误处理中间件next()前要统一加或统一不加 await，如果后进的中间件加了而
 * 先执行的中间件没加，则先进去的中间件next() 后代码会先执行，就不遵循先进后出的秩序了 */
app.use(async (ctx,next) => {
    // ctx.body = "这是匹配" + ctx.request.url + "中间件";
    console.log('1, 刚开始执行第一个中间件')
    await next() // 没有 next() 的话，程序相当于到此 return
    console.log('6, 第一个中间件next()后代码')
})

// 错误处理中间件, app.use 永远比路由及路由中间件要先执行
app.use(async (ctx,next) => {
    console.log('2, 第二个中间件')
    await next()
    if(ctx.status == 404){
        ctx.status = 404
        ctx.body = '这是一个404错误页面！';
    }else{
        console.log(ctx.url)
    }
    console.log('5, 第二个中间件next()后代码')
})

router.get('/', ctx => {
    ctx.body = "这是首页路由";
})

/*路由级中间件*/
router.get('/news', async (ctx,next) => {
    console.log('3, 路由级中间件/news打印给服务端，next()后继续向下匹配')
    next()
})
router.get('/news', ctx => {
    console.log('4, ctx.body 新闻页面渲染')
    ctx.body = "这是新闻页面路由";
})

// 动态路由 -> 单个参数
router.get('/content/:cid', ctx => {
    ctx.body = "这是详情页面 cid = " + ctx.params.cid;
})

// 动态路由 -> 多个参数 tid 必填，cid 可填
router.get('/page/:cid?/:tid', ctx => {
    ctx.body = "这是详情页面 cid = " + ctx.params.cid + " tid = " + ctx.params.tid;
})

app
    .use(router.routes())
    .use(router.allowedMethods())

app.listen(3003, () => {console.log('运行在 localhost:3003 端口')});
