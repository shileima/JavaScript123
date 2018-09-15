const http = require('http');
const fs = require('fs');
const b = require('./b');

const server = http.createServer((req, res) => {
    if(req.url == '/favicon.ico'){ return }
    res.writeHead(200,{'Content-Type':'text/html;charset=utf8'});

    console.log(b)
});

server.listen('5003', 'localhost', ()=>{
    console.log('server is running at 5003')
});