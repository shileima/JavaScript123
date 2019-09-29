let http = require('http');
let path = require('path');
let url = require('url')
let fs = require('fs');
/* 类似于静态服务 */
let server = http.createServer((req, res) => {

    let { pathname } = url.parse(req.url);
    let absPath = path.join(__dirname, pathname)

    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500'); // 'http://127.0.0.1:5500'
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,DELETE,PUT,OPTIONS');
    res.setHeader('Access-Control-Max-Age', 10) // 10 秒内不要再发试探性的options请求
    res.setHeader('Access-Control-Allow-Headers','Content-Type,Authorization')
    res.setHeader('Access-Control-Allow-Credentials',true)

    if (req.method === 'OPTIONS') {
        res.end();
    }
    console.log(req.headers);

    if (pathname == '/user') {
        return res.end(JSON.stringify({ "name": "loading" }))
    }
    fs.stat(absPath, function (err, statObj) {
        if (err) res.statusCode = 404, res.end('404');
        if (statObj.isDirectory && statObj.isDirectory()) {
            res.end('id Directory')
        } else {
            fs.createReadStream(absPath).pipe(res)
        }
    })


}).listen(5000)