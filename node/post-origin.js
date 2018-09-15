const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
const querystring = require('querystring');
// const formidable = require('formidable');
const util = require('util');

const server = http.createServer((req,res) => {

    let pathname = url.parse(req.url).pathname;
    if(pathname.indexOf('.') == -1){
        pathname += '/index2.html';
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

    if(req.url == '/dopost' && req.method.toLowerCase() === 'post'){
        let stringdata = '';

        // res.writeHead(200,{'Content-Type':'text/html;charset=utf8'})


         // 以下是原生实现数据 post 上传
         req.on('data',chunk => {
         stringdata += chunk;
         });

         req.on('end',(err,chunk)=>{
         /*let objdata = querystring.parse(stringdata, null, null);
             console.log(objdata)
         res.writeHead(200,{"Content-Type":"text/html;charset=utf8"});
         res.write(objdata.name.toString())
         res.write(objdata.sex.toString())*/
         if(err){
             console.log(err)
             return;
         } else {
             fs.appendFile('./static/login.txt',stringdata,() => {console.log('写入成功！')})

             res.end("<script>alert('写入成功!')</script>")
         }


         });


    };
});

function getMime(extname){
    switch(extname){
        case ".html" :
            return "text/html";
            break;
        case ".jpg" :
            return "image/jpg";
            break;
        case ".jpeg" :
            return "image/jpeg";
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

server.listen('8080','localhost',()=>{
    console.log('server is running at port 8080')
});