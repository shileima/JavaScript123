/* 转换流 */
let {Transform} = require('stream');
let t = Transform({
  transform(chunk,encoding,cb){
    console.log(chunk.toString().toUpperCase());
    cb()
  }
});

process.stdin.pipe(t).pipe(process.stdout)