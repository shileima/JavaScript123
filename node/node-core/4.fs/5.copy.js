// 节约内存的拷贝
let fs = require('fs')
const BUFFER_ZISE = 3
function copy(src,target) {
  fs.open(src,'r',0o0666,function(err,readFd){
    fs.open(target,'w',0o0666,function (err,writeFd) {
      let buff = Buffer.alloc(BUFFER_ZISE)
      !function next(){
        fs.read(readFd,buff,0,BUFFER_ZISE,null,
            function(err,bytesRead,bufferRead){
          if(err) {console.log(err); }
          console.log('bytesRead:',bytesRead);
          //console.log('buffer:',bufferRead.toString());
          if(bytesRead > 0){
            fs.write(writeFd,bufferRead,0,bytesRead,null,next)
          } else {
            console.log("copy finished!");
            return false;
        }
        })
      }()
    })
  })
}
copy('./1.txt','./2.txt')