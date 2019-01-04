let fs = require('fs')
// 截断文件，取前n个字符
fs.truncate('./2.txt',3,()=>{
    console.log("truncate success!");
})