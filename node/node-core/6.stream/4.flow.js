let fs = require('fs');
let path = require('path');
/*
* 可写流,不会立刻写入文件,先写入缓存区，默认16K
* 等缓存区满了，再真正写入文件
* highWaterMark <integer>返回的可读流大小 默认为 64 kb
* start 文件开始写入的位置
* 写入ws.write() 返回 flag<true or false> false 代表缓存区已满
* */
let rs = fs.createReadStream(path.resolve(__dirname,'./2.txt'),{
    highWaterMark:5
})

/*rs.on('data',data=>console.log(data.toString()))
rs.on('end',data=>console.log("读取完成！"))*/

//当监听readable事件的时候,会进入暂停模式，调用fs.read读取底层文件
//将读到的数据放进缓冲区里。
//当缓冲区大小小于highWaterMark的时候会重新读取一次

rs.on('readable',()=>{
    console.log("缓冲区大小1:",rs._readableState.length);
    let ch = rs.read(1)
    //read以后缓冲区未满则立即填充一个highWaterMark:3长度的数据
    console.log("缓冲区大小2:",rs._readableState.length);
    //如果添加了异步延时则等都读取完了，返回缓冲区大小都是0
    setTimeout(()=>{
        console.log("缓冲区大小3:",rs._readableState.length);
    },200)
    console.log("ch:",ch.toString());
})
// 一开始缓冲区读取最大水位线highWaterMark:3个字节<1,2,3>,fs.read以后,缓冲区剩余<3,>立即补充下一个水位线3个变成<3,4,5,6>继续读取
