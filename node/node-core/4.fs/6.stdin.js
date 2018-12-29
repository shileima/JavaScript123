//    stderr /2     stdin /0   stdout/1 分别指向
// 标准错误流 / 标准输入流 /   标准输出流

console.log('hello')
console.error('wrong')
let fs = require('fs')

//process.stdin.on('data',data => console.log(4))

// 如果是1相当于标准输出console.log
// 如果是2相当于标准输出console.error

fs.write(1,Buffer.from('a'),0,1,null,(err,bytesWritten) => {
    console.log(bytesWritten);
})

