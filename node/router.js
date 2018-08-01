const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const url = req.url;
    res.writeHead(200,{'Content-Type':'text/html;charset=utf8'});
    //res.end('url:'+ url)
    console.log(url)
    console.log(url.substr(9))
    if(url.substr(0,9) == '/student/' && /^\d{10}$/.test(url.substr(9))){
        res.end('学生的id为：' + url.substr(9));
    }else if (url.substr(0,9) == '/teacher/' && /^\d{6}$/.test(url.substr(9))){
        res.end('教师的id为：' + url.substr(9));
    }else{
        res.end('请检查URL');
    }
});

server.listen('5001', 'localhost', ()=>{
    console.log('server is running at 5001')
});