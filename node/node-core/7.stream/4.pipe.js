let {Readable, Writable} = require('stream');
let i = 0;
let rs = Readable({
  // 不设置highWaterMark的话，默认64k
  read(){
    if(i<10){
      this.push(i.toString());
      console.log(i++)
    }else{
      this.push(null)
    }
  }
})

let ws = Writable({
  highWaterMark: 3,
  write(chunk,encoding,callback){
    console.log(chunk.toString());
    //callback()
  }
})
// rs [0....9]
rs.pipe(ws)

setTimeout(()=>{
  console.log(rs._readableState.length); // 7
  console.log(ws._writableState.length); // 3
},500)

/* rs.on('data',data=>{
  console.log(data.toString);
  //0,1....9
}) */
