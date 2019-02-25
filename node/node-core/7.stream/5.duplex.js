/* 双工流 */
let {Duplex} = require('stream');
let index = 0;
let d = Duplex({
  read(){
    if(index++<3)
      this.push('a')
    else
      this.push(null)
    
  },
  write(chunk,encoding,cb){
    console.log(chunk.toString().toUpperCase());
    cb()
  }
})

process.stdin.pipe(d).pipe(process.stdout)