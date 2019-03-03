const fs = require('fs');
let path = require('path'); 

const rr = fs.createReadStream(path.resolve(__dirname,'1.txt'))

rr.on('readable', () => {
  /* 当调用 stream.read() 时才会触发 'data' 事件 */
  console.log(`读取的数据: ${rr.read()}`);
});
rr.on('data', data => {
  console.log('data:' + data);
})
rr.on('end', () => {
  console.log('结束');
});

/* 通常情况下，readable.pipe() 和 'data' 事件的机制
比 'readable' 事件更容易理解。 
处理 'readable' 事件可能造成吞吐量升高。

如果同时使用 'readable' 事件和 'data' 事件，
则 'readable' 事件会优先控制流，也就是说，
当调用 stream.read() 时才会触发 'data' 事件。 
readableFlowing 属性会变成 false。 当移除 'readable' 事件时，
如果存在 'data' 事件监听器，则流会开始流动，也就是说，
无需调用 .resume() 也会触发 'data' 事件。 */