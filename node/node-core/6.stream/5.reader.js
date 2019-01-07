let fs = require('fs');
let path = require('path');

fs.readFile(path.resolve(__dirname,'./5.txt'), (err,data) => {
    if(err) throw err;
    // 0d 0a 就是 \r\n (windows)
    // linux 是 \n
    // mac 是 \r

    console.log(data)
    console.log(data.toString())
});