/* 这里采用 IIFE 立即执行函数来阻止异步回调 */

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if(req.url == '/favicon.ico'){ return }
    res.writeHead(200,{'Content-Type':'text/html;charset=utf8'});
    let directory = [];
    fs.readdir('./test', {'encoding':'utf8'}, (err,files)=>{
        (function literator(i){
            if(i == files.length){
                console.log('i == files.length')
                console.log(directory)
                return;
            };
            fs.stat('./test/'+files[i],(err,stats)=>{
                if(stats.isDirectory()){
                    directory.push(files[i])
                }
                literator(i+1)
            });
            // console.log(i)
            // literator(i+1) 
            // 第一次错误地将递归迭代函数放到这里，导致出错;因为fs.stat()是一个异步函数，
            // 会等所有后续函数执行完毕后,console.log(i) 和 literator(i+1)，迭代到 i == files.length 的时候执行
            // 里面的函数
        })(0);
    });    
});

server.listen('5003', 'localhost', ()=>{
    console.log('server is running at 5003')
});
