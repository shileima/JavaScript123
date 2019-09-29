let http = require('http')
let zlib = require('zlib')
let fs = require('fs')
let path = require('path')

let server = http.createServer((req, res) => {
    let encoding = req.headers['accept-encoding'];
    if (encoding) {
        if (/\bgzip\b/.test(encoding)) {
            // 告诉浏览器解析gzip编码，否则会当成下载文件
            res.setHeader('Content-Encoding','gzip')
            fs.createReadStream(path.resolve(__dirname,'./1.html')).pipe(zlib.createGzip()).pipe(res)
            return
        }

        if (/\bdeflate\b/.test(encoding)) {
            res.setHeader('Content-Encoding','deflate')
            fs.createReadStream(path.resolve(__dirname,'./1.html')).pipe(zlib.createDeflate()).pipe(res)
            return
        }
    } else {
        fs.createReadStream('./1.html').pipe(res)
    }
});

server.listen(5000)