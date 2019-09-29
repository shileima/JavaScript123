const http = require('http');
let fs = require('fs');
let path = require('path');
let url = require('url');

const hostname = 'localhost';
const port = '3000';
let whiteList = ['localhost:3000']
const server = http.createServer((req, res) => {
    
    // console.log(path.join(__dirname,req.url))
    fs.stat(path.join(__dirname,req.url),(err,statObj)=>{
        if(err){
            console.log(err)
            res.statusCode = 404
            res.end()
            return
        }
        if(statObj.isDirectory()){
            res.end()
            return
        }else{
            let referer = req.headers['referer'];
            if(referer){
                let refererHost = url.parse(referer).host
                let host = req.headers['host']
                console.log(whiteList.includes(refererHost))
                if(refererHost != host && !whiteList.includes(refererHost)){
                    return fs.createReadStream(path.join(__dirname,'bad.jpg')).pipe(res)
                }
            }            
            fs.createReadStream(path.join(__dirname,req.url)).pipe(res)
        }
    })
});

server.listen(port, hostname, () => {
  console.log(`server running at http://${hostname}:${port}/`);
});