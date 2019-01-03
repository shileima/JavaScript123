let fs = require('fs')
let path = require('path')

fs.readdir('./a',function(err,files){
    console.log('files:',files);
    files.forEach(file=>{
        let child = path.join('a',file)
        console.log('child:',child);
        fs.stat(child,(err,stats)=>{
            if(err) { throw err;}
            //console.log('stat:',stats);
            console.log('stat:',stats.isDirectory());
        })
    })
})