/* 自己封装见 5.copy.js */
const fs = require('fs')

fs.copyFile('./2.txt','./5.txt',(err)=> {
        if (err) throw err;
        console.log('copy finished!')
    }
)
