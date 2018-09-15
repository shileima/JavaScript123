/**
 * Created by SYSTEM on 2018/8/7.
 */
const http = require('http');
const fs = require('fs');
const pug = require('pug');

const server = http.createServer((req, res) => {
    fs.readFile('./views/index.pug',(err,data)=>{
        if(err){console.log(err)};
        var html = pug.render(data.toString(), {name:'Loading'}, null);

        /*res.setHeader('viewport','width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no')*/
        res.writeHead(200,{'Content-Type':'text/html;charset=utf8'});

        res.end(html)
    });
});

server.listen('8080','localhost',()=>{
    console.log('server running at port 8080')
});
