const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next) => {
    console.log(1)
    await next();
    console.log(2)
});

app.use(async (ctx, next) => {
    await next();
    const rt = ctx.response.get('X-Response-Time');
    console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time',`${ms}ms`);
});

app.use(async (ctx, next) => {
    console.log(3)
    await next();
    console.log(4)
});

// response
app.use(async ctx => {
    ctx.body = "Koa 中间件执行顺序是：先进后出";
});

app.listen(3000);