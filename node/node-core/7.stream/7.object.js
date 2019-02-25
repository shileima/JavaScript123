/* 对象流 */
/* 应用：将文件里的字符串内容转换成 JSON 格式 */
let {Transform} = require('stream');
let fs = require('fs');
let rs = fs.createReadStream('./user.json')

//普通流里放的是buffer，
//对象流里放的是对象
let toJSON = Transform({
  readableObjectMode: true, // 可以存放对象了
  // 想可读流的缓冲区里放数据
  transform(chunk,encoding,cb){
    this.push(JSON.parse(chunk.toString()))  
  }
})
let outJSON = Transform({
  writableObjectMode: true, // 可以写入对象了
  // 想可读流的缓冲区里放数据
  transform(chunk,encoding,cb){
    console.log(chunk.name); // 现在trunk就是一个JSON对象了
  }
})
rs.pipe(toJSON).pipe(outJSON)