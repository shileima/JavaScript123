const Koa     = require('koa');
const fs      = require('fs');
const views   = require('koa-views');
const router  = require('koa-router')();
const bodyParser = require('koa-bodyparser')
const path   = require('path')

const app = new Koa;

// 配置第三方中间件，模板引擎

/*第一种配置方法*/
/*用这种写法的话views/下的文件必须以html结尾*/
 app.use(views('node/views', {map: {html: 'ejs'}}))

/*第二种配置方法 extension 是模板文件后缀,必须写ejs才能在模板里用ejs的语法*/
// app.use(views('node/views', {extension: 'ejs'}))

let title = "这是一个数据title",
    arr   = [111,222,333];
app.use(bodyParser())
app.use(async (ctx,next) => {
    ctx.state.userInfo = {
        name: 'Loading',
        age : 23
    }
    console.log(1)
    await next(); // 由于路由中有render异步操作，所以，这里如果不加 await 的话，等回来执行console.log(4)后，render 还没有执行完，这时候ctx已经跑到中间件这里了，所以就没有输出内容了。因此，导致页面还没有渲染完not fund；
    console.log(4)
    /*ctx.body = "回来执行中间件next后汉书，没有匹配到路由"*/
})

router.get('/', async ctx => {
    console.log(2)
    //ctx.body = "koa-view";

    /* 这里的render方法是异步渲染前面必须加 await ，如果不加 await , 程序会跳出这个ctx到
    * 别的中间件执行了，如果别的中间件没有ctx.body 输出，就会 not fund*/
    await ctx.render('index', { title : title})
    console.log(3)
})

router.get('/news', async ctx => {

    //ctx.body = "koa-view";

    /* 这里的render方法是异步渲染前面必须加 await */
    await ctx.render('news', { list : arr})
})

// 登录页面
router.get('/login', async ctx => {
    await ctx.render('form', {}, data => {
        console.log('data:',data)
    })
})
// 处理用户提交数据,
// ctx.request.body 结合bodyParser 获取提交数据
router.post('/dologin', async ctx => {
    ctx.body = ctx.request.body
    fs.appendFile('node/login.txt', JSON.stringify(ctx.request.body) + '\r\n', () => {
        console.log('登录信息写入成功!')
    })
})

app.use(router.routes());
app.use(router.allowedMethods())

app.listen(3005, () => {
    console.log(`Koa-view listen at port 3005`)
})