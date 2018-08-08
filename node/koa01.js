const Koa = require('koa');
const app = new Koa();

// response
app.use(ctx => {
    ctx.body = "Hello World! I am Koa.";
});

app.listen(3000);