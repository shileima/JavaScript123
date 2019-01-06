let fs = require('fs');
let path = require('path');
/*
* 可写流,可读流实现 pipe()
* 写入ws.write() 返回 flag<true or false> false 代表缓存区已满
* */
let rs = fs.createReadStream('./1.txt',{
    flag:'r',
    mode:0o666,
    highWaterMark:20
});
let ws = fs.createWriteStream('./2.txt',{
    flag:'w',
    mode:0o666,
    highWaterMark:20,
    start:0
});
// pipe() 可以讲一个文件数据按照指定大小逐步导入到另一个文件
rs.pipe(ws);
// unpipe() 可以清理掉已经 pipe 过去的数据流
//rs.unpipe(ws)
/*
rs.on('data',data => {
    console.log(data.toString());
    let flag = ws.write(data)
    if(!flag){
        rs.pause()
    }
});
ws.on('drain',() => {
    console.log("drain");
    rs.resume()
});*/
