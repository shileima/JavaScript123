let fs = require('fs')
let iconv = require('iconv-lite')
let path = require('path')

fs.readFile(path.resolve(__dirname,'1.txt'), function(err,data){
    console.log(path.resolve(__dirname, '1.txt'));
    if(err){ console.log(err); }
    console.log(data.toString());
    let str = iconv.decode(data,'gbk')
    console.log(str.toString());
})