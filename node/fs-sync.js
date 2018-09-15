/* 这里采用 Node.js 最新 api 的异步处理机制；
readdirSync 和 statSync 两个方法 */

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if(req.url == '/favicon.ico'){ return }
    res.writeHead(200,{'Content-Type':'text/html;charset=utf8'});
    let directory = [];
    let filesList = fs.readdirSync('./test', {'encoding':'utf8'});
    
    for(let i=0;i<filesList.length;i++){
        //下面循环使用 let 或 var 均可以，因为下面的 fs.statSync()是一个同步函数，要执行完后，才会继续执行后续代码
        let thisStat = fs.statSync('./test/' + filesList[i])
        if(thisStat.isDirectory()){
            directory.push(filesList[i])
        }
    }
    console.log(directory)
});

server.listen('5003', 'localhost', ()=>{
    console.log('server is running at 5003')
});
