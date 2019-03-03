let fs = require('fs');
let path = require('path');
let ws = fs.createWriteStream(path.resolve(__dirname,'./6.txt'),{
    flags:'w',
    mode:0o666,
    start:1,
    encoding: 'utf8',
    autoClose:true, // 当流写完后自动关闭文件
    highWaterMark:3
});
let n = 9;

function write(){
    let flag = true;
    while(flag && n>0){
        flag = ws.write(n + "", 'utf8', ()=>{
          console.log("ok");
        });
        n--;
        console.log(flag);
    }
    // 超过highWaterMark后，当触发 'drain' 事件时继续写入。
    // drain 时间是监控到内存写入到流里面后，内存就空了，
    // 可以关闭文件也可以继续写入

    // once 监听一次就销毁,因为写入数据流后继续调用write方法多次执行
    // on 一直监听，如果放到write函数外面，可以使用on
    ws.once('drain',()=>{
        console.log("drain");
        write()
    })
    console.log('write');
};
ws.on('error',err => console.log(err) )
write();

/*
let flag = ws.write('a')
console.log(flag);*/
