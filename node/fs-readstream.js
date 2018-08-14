/**
 * Created by SYSTEM on 2018/8/14.
 */

const fs = require('fs');

let readStream = fs.createReadStream('./1.txt')
let str = '';

readStream.on('data',chunk => {
    str += chunk;
});

readStream.on('end',() => {
    console.log(str)
});

readStream.on('error',(err) => {
    console.log(err)
});

