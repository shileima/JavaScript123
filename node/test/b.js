const fs = require('fs');

let a = 100;
console.log('这是从另一个js文件里require过来的a值：',a);

fs.readFile(__dirname + '/2.txt',(err,data)=>{
    if(err){throw err;}
    console.log(data.toString());
});
