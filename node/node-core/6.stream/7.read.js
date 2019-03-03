let fs = require('fs');
let path = require('path');

let ReadStream = fs.createReadStream(path.resolve(__dirname,'7.txt'),{
    start: 3,
    end: 8,
    highWaterMark: 3
})

ReadStream.on('open',function(){
    console.log('open')
})

ReadStream.on('data',function(data){
    console.log(data.toString())
})

ReadStream.on('end',function(){
    console.log('end');
})

ReadStream.on('error',function(){
    console.log('error')
})

ReadStream.on('close',function(data){
    console.log('close')
})

