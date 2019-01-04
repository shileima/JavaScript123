let path = require('path')
let fs = require('fs')
// 当前文件夹目录
console.log('__dirname:',__dirname);
// 当前文件目录
console.log('__filename:',__filename);

// path.join() 连接两个目录
let content = fs.readFileSync(path.join(__dirname, '../4.fs/1.txt'))
console.log(path.join(__dirname, '../4.fs/1.txt'));
console.log(content.toString())

// path.resolve() 从当前目录出发解析一个绝对路径
let content2 = fs.readFileSync(path.resolve(__dirname, '../4.fs/1.txt'))
console.log(path.resolve(__dirname, '../4.fs/1.txt'));
console.log(content2.toString())

console.log(path.resolve(__dirname, '../4.fs/1.txt') === path.join(__dirname, '../4.fs/1.txt'));

//方法将返回平台的真实路径，多个用 “:” 或 “;” 隔开。
console.log('process.env.PATH=>',process.env.PATH);
console.log('delimiter=>',path.delimiter);
console.log('win32.delimiter=>',path.win32.delimiter);
console.log('posix.delimiter=>',path.posix.delimiter);

//将特定文字分隔符 ‘\\' 或 ‘/' 的字符串转换成数组对象。
console.log('path.sep=>',path.sep);
console.log('path.win32.sep=>',path.win32.sep);
console.log('path.posix.sep=>',path.posix.sep);

console.log(path.join(__dirname, '../4.fs/1.txt').split(path.sep));

// basename
console.log(path.basename(__filename));
// extname
console.log(path.extname(__filename));