let {Writable} = require('stream');
let arr = [];
let ws = Writable({
  //这里必须是write方法，不是 _write()
  //源码内部做了调整
  write(chunk,encoding,callback){
    arr.push(chunk);
    callback() // 这个回调是继续调用的开关，相当于generator的next()
  }
})

for(let i=0; i<5; i++){
  ws.write('' + i, 'utf8', ()=>{console.log('ok');
  })
}

setTimeout(()=>{
  console.log(arr.toString());
},500)