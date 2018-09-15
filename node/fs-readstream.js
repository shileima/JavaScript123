/**
 * Created by SYSTEM on 2018/8/14.
 */

const fs = require('fs');

let readStream  = fs.createReadStream('./1.txt')
let writeStream = fs.createWriteStream('./static/output.txt')

let str = '';
let writeStr = '这是通过writeStream写入的数据\n';
let count = 0;

readStream.on('data',chunk => {
    str += chunk;
    count++;
});

readStream.on('end',() => {
    //console.log(str)
    console.log(count)
});

readStream.on('error',(err) => {
    console.log(err)
});

// readStream.pipe(writeStream) // 通过管道方式将读取的readStream导入到writeStream

writeStream.write(writeStr)
writeStream.write(writeStr)
writeStream.write(writeStr)

writeStream.end();

writeStream.on('finish',() => {
    console.log('写入完成！')
})
