let zlib = require('zlib')
let fs = require('fs')
let path = require('path')

let gzip = zlib.createGzip()
//console.log(gzip); // 流 转化流
console.log(path.resolve(__dirname))
fs.createReadStream(path.resolve(__dirname,'./111.txt')).pipe(gzip).pipe(fs.createWriteStream(path.resolve(__dirname,'./111.gz')))
