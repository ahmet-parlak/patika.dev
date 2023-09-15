const http = require('http');
const port = 5000;

const server = http.createServer((req, res) => {
    const host = req.headers.host;
    const method = req.method;
    const path = req.url;

    console.log(`(${method}) ${host}${path}`);

    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

    switch (path) {
        case '/':
            res.write('<h2>Ana Sayfa</h2>');
            break;

        case '/about':
            res.write('<h2>Hakkında</h2>');
            break;

        case '/contact':
            res.write('<h2>İletişim</h2>');
            break;

        default:
            res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
            res.write('<h2>404 | Sayfa Bulunamadı</h2>');
            break;
    }

    res.end();
});

server.listen(port, () => {
    console.log(`Sunucu ${port} port numarası üzerinde ayağa kaldırıldı..`);
});