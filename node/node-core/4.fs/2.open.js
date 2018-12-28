/* fs.open 先打开有控制地读取 */
let fs = require('fs')
// open参数filename、flag、mode、callback
// callback参数fd是file discriptor 文件描述符；是一个整数，0代表标准输入; 1 代表标准输出，2代表错误输出；所以这个整数一般是3
fs.open('./1.txt','r',0o666,(err,fd)=>{
    let buff = Buffer.alloc(4)
    //0 是buff写入索引 3是写入的字节长度 0是文件的读取位置position(不给的话指向当前索引)
    // callback的bytesRead 是读取到的字节长度；参数中的3是准备写入的字节长度
    // callback的buffer与参数buff是一个东西
    fs.read(fd,buff,1,3,1,(err,bytesRead,buffer)=>{
        console.log('fs:',fd);
        console.log('bytesRead:',bytesRead);
        console.log('buffer:',buffer.toString());
    })
})
