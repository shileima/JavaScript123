let fs = require('fs');
let path = require('path');
/*
* highWaterMark <integer>返回的可读流大小 默认为 64 kb
* end 包括最后一位
* */
let ReadStream = fs.createReadStream(path.resolve(__dirname,'./1.txt'),{
    flag:'r',
    mode:0o666,
    encoding:'utf8',
    start:0,
    end:10,
    highWaterMark:3 });

ReadStream.on('open',(data)=>{
    console.log("文件打开！");
});

ReadStream.on('data',(data)=>{
    console.log(data.toString());
    ReadStream.pause()
    console.log("暂停了...");
    setTimeout(()=>{
        ReadStream.resume()
        console.log("继续...");
    },2000)
});

ReadStream.on('error',()=>{
    console.log('文件读取错误！');
});

ReadStream.on('end',(data)=>{
    console.log("读取完毕！");
});

ReadStream.on('close',(data)=>{
    console.log("文件关闭！");
});