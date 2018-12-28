/* fs.open 先打开有控制地读取 */
let fs = require('fs')

fs.open('./2.txt','a',0o666,(err,fd)=>{
    let buff = Buffer.from('珠峰')
    fs.write(fd,buff,0,3,null,(err,bytesRead,buffer)=>{
        if(err) {console.log(err); }
        console.log(bytesRead);
    })
});