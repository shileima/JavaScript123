const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req,res)=>{

    let pathname = url.parse(req.url).pathname;
    if(pathname.indexOf('.') == -1){
        pathname += '/index.html';
    };
    const realPath = __dirname + '/static/';
    // readFile 如果未指定字符编码，则返回原始的 buffer 
    // 如果加了默认 'utf8' 读取图片会出问题,相当于将原始buffer的图片编码格式改成了 utf8
    fs.readFile(realPath + pathname, (err,data)=>{
        if(err){
            fs.readFile('./static/404.html', (err,data)=>{
                res.writeHead(404,{'Content-Type':'text/html;charset=utf8'});
                res.end(data)
            });
            return;
        };
        let mimetype = getMime(path.extname(pathname));
        res.writeHead(200,{'Content-Type':mimetype});
        res.end(data)
    });
});

function getMime(extname){
    switch(extname){
        case ".html" :
            return "text/html";
            break;
        case ".jpg" :
            return "image/jpg";
            break;
        case ".png" :
            return "image/png";
            break;
        case ".gif" :
            return "image/gif";
            break;
        case ".ico" :
            return "image/ico";
            break;
        case ".css" :
            return "text/css";
            break;
        case ".js" :
            return "text/javascript";
            break;
    }
};

server.listen('80','localhost',()=>{
    console.log('server is running at port 80')
});