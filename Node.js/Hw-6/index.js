const Koa = require('koa');

const app = new Koa();

app.use(ctx => {
    const host = ctx.host;
    const path = ctx.path;
    const method = ctx.method;

    console.log(`(${method}) ${host}${path}`);

    switch (path) {
        case '/':
            ctx.body = '<h1>Ana Sayfa</h1>'
            break;

        case '/about':
            ctx.body = '<h1>Hakkında</h1>'
            break;

        case '/contact':
            ctx.body = '<h1>İletişim</h1>'
            break;

        default:
            ctx.response.status = 404;
            ctx.body = '<h1>404 | Sayfa Bulunamadı<h1/>'
            break;
    }

});

const port = 3000;
app.listen(port, () => {
    console.log(`Server ${port} port numarası üzerinde ayağa kaldırıldı..`);
});