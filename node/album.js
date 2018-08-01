const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if(req.url == '/favicon.ico'){ return }
    res.writeHead(200,{'Content-Type':'text/html;charset=utf8'});
    let directory = [];
    let filesList = fs.readdirSync('./test', {'encoding':'utf8'});
    for(i=0;i<filesList.length;i++){
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

// for(i=0;i<files.length;i++){
//     fs.statSync('./test/' + files[i], (err,stats)=>{
//         if(stats.isDirectory()){
//             directory.push(files[i])
//             console.log(files[i])
//         }
//     })
// }