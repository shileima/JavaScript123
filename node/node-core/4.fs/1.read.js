let fs = require('fs')

/*
fs.readFile('./1.txt',{encoding:'utf8',flag:"r"},(err,data)=>{
    if(err){
        console.error(err)
    } else {
        //<Buffer 20 31 32 33 34 35 36 37 38 39 30 7a e7 8f a0 e5 b3 b0>
        console.log(data);
        // toString or {encoding:'utf8'} 都可以
        console.log(data.toString());
    }
})*/
// mode:'0o666' 是Linux的 权限位,创建文件的时候定义，readFie不能改权限
fs.writeFile('./2.txt','data2\n',{encode:'utf8',flag:'a',mode:0o666},function (err) {
    if(!err){console.log("2 ok!");};
})
fs.writeFile('./3.txt',Date.now()+'\n',{encode:'utf8',flag:'a',mode:0o666},function (err) {
    if(!err){console.log("3 ok!");};
})
fs.appendFile('./4.txt',Date.now()+'\n',{encode:'utf8',mode:0o666},function (err) {
    if(!err){console.log("4 ok!");};
})