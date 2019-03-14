const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.get('/', (ctx, next) => {
  ctx.body = 'Hello World!!!';
});

// use koa-router middleware
app.use(router.routes())

app.listen(3000);
