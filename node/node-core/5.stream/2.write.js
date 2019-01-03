let fs = require('fs')
let str = '珠峰'

fs.open('./2.txt','a',0o666,(err,fd)=>{
    let buff = Buffer.from(str)
    fs.write(fd,buff,0,3,null,(err,byteWritten)=>{
        fs.write(fd,buff,3,3,null,(err,byteWritten)=>{
            fs.fsync(fd,(err)=>{
                if(err){ console.log(err); }
                fs.close(fd,(err)=>{
                    if(err){ throw err }
                    console.log("file cloed!");
                })
            })
        })
    })
})