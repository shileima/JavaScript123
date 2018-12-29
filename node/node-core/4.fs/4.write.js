/* fs.open 先打开文件并有控制地读取 */
let fs = require('fs')

/*
* r是只读;w是清空并写入;r+可以修改 如果null则从第一个字节开始
* wx排它写入文件; rs同步读取文件并忽略缓存
* */
fs.open('./2.txt','a',0o666,(err,fd)=>{
    console.log(fd);
    let buff = Buffer.from('珠峰')
    fs.write(fd,buff,3,3,null,(err,bytesRead,buffer)=>{
        if(err) {console.log(err); }
        console.log(bytesRead);
        // 强行把缓冲区的数据写入文件后关闭文件
        fs.fsync(fd,function(err){
            if(err){console.log(err)}
            fs.close(function(){
                console.log('关闭');
            })
        })
    })
});