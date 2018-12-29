let fs = require('fs')
// 同步删除非空目录及子目录

function rmdirp(dir){
    let files = fs.readdirSync(dir)
    files.forEach(function(file){
        let current = dir + '/' + file;
        let child = fs.statSync(current)
        if(child.isDirectory()){
            rmdirp(current)
        } else {
            //console.log(typeof child);
            fs.unlinkSync(current)
        }
    })
    fs.rmdirSync(dir)
}
//
rmdirp('./a')

// 原生删除报错  directory not empty,
// 原生rmdirSync只能删除空目录
//fs.rmdirSync('./a/b')


//fs.rmdirSync('./a/b/c/d')

