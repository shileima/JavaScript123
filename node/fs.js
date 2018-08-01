const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if(req.url == '/favicon.ico'){ return }
    res.writeHead(200,{'Content-Type':'text/html;charset=utf8'});
    fs.readFile('./1.txt', 'utf8', (err,data)=>{
        if(err) throw err;
        console.log(1)
        res.end(data)  
    })

    let data = fs.readFileSync('./1.txt', 'utf8') 
    // 同步读取，这里不获取到数据，下面代码不执行，如果用 readFile 会打印data undefined
    console.log(data)
    console.log(2)
    // 我是1.txt里的文字......2......1
});

server.listen('5002', 'localhost', ()=>{
    console.log('server is running at 5002')
});