const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req,res)=>{

    let pathname = url.parse(req.url).pathname;
    if(pathname.indexOf('.') == -1){
        pathname += '/index.html';
    };
    console.log(pathname)

    // readFile 如果未指定字符编码，则返回原始的 buffer 
    // 如果加了默认 'utf8' 读取图片会出问题,相当于将原始buffer的图片编码格式改成了 utf8
    fs.readFile('./static/' + pathname, (err,data)=>{
        if(err){
            fs.readFile('./static/404.html', (err,data)=>{
                res.writeHead(404,{'Content-Type':'text/html;charset=utf8'});
                res.end(data)
            });
            return;
        };

        getMime(path.extname(pathname), mineType => {
            res.writeHead(200,{'Content-Type':mineType + ';charset=utf8'});
            res.end(data)
        });
    });
});

function getMime(extname,callback){

    /*使用mime表来更完整地匹配不同类型*/
    fs.readFile('./static/mime.json',(err,data)=>{
        let mineJSON = JSON.parse(data);
        let mineType = mineJSON[extname] || "text/plain";
        callback(mineType)
    });

};

server.listen('80','localhost',()=>{
    console.log('server is running at port 80')
});