let fs = require('fs');
let path = require('path');
/*
* 可写流,不会立刻写入文件,先写入缓存区，默认16K
* 等缓存区满了，再真正写入文件
* highWaterMark <integer>返回的可读流大小 默认为 64 kb
* start 文件开始写入的位置
* 写入ws.write() 返回 flag<true or false> false 代表缓存区已满
* */
let ws = fs.createWriteStream('./2.txt',{
    flag:'w',
    mode:0o666,
    highWaterMark:3,
    start:0
})

let flag = ws.write('a')
console.log(flag);
flag = ws.write('b')
console.log(flag);
flag = ws.write('c')
console.log(flag);
flag = ws.write('d')
console.log(flag);