let fs = require('fs')
let path = require('path')

fs.watchFile('a.txt',(curr,prev)=>{
    console.log(`the current mtime is: ${curr.mtime}`);
    console.log(`the previous mtime was: ${prev.mtime}`);
    console.log(curr.mtime)
    if(Date.parse(curr.mtime) == 0){
        console.log("文件被创建了~");
    }else if(Date.parse(curr.mtime) >= Date.parse(prev.mtime)){
        console.log("文件被修改了");
    }else{
        console.log("文件被删除了");
    }
})

fs.watch(path.resolve(__dirname,'./a'), (eventType, filename)=>{
    console.log(`event type is: ${eventType}`);
    if (filename) {
        console.log(`filename provided: ${filename}`);
    } else {
        console.log('filename not provided');
    }
})