const Koa = require('koa');
const app = new Koa();
const session = require("koa-session");

app.keys = ["Loading"];
app.use(session(app));
app.use(async ctx => {
    if(ctx.path === '/favicon.ico') return;
    let n = ctx.session.view || 0;
    ctx.session.view = ++n;
    ctx.body = n + "views";
});

app.listen(2003, () => {console.log(`Server Running at port 2003`)})