let fs = require('fs');
let path = require('path');
let LineReader = require('./6.lineReader')

let reader = new LineReader('./5.txt');

reader.on('newLine',data=>{
    console.log(data);
})

reader.on('end',()=>{
    console.log('end');
})
