const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if(req.url == '/favicon.ico'){ return }
    res.writeHead(200,{'Content-Type':'text/html;charset=utf8'});
    fs.readdir('./test', {'encoding':'utf8'}, (err, files)=>{ 
    // 第二个参数默认utf8可以去掉，也可以是 'buffer'
        console.log(files) 
        // files 是个数组，是读取该文件夹下除了 . 和 .. 以外的所有文件和文件夹
    });
});

server.listen('5003', 'localhost', ()=>{
    console.log('server is running at 5003')
});