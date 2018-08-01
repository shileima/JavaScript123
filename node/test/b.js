const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if(req.url == '/favicon.ico'){ return }
    res.writeHead(200,{'Content-Type':'text/html;charset=utf8'});
    fs.rmdir('www',()=>{
        console.log('删除成功')
    })
    fs.stat('./test',(err,stats)=>{
        console.log(stats)
    });
});

server.listen('5003', 'localhost', ()=>{
    console.log('server is running at 5003')
});