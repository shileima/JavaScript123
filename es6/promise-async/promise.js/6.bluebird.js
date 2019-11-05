// let bluebird = require('bluebird');
let fs = require('fs');
// 可以把node(异步)回调的api转化成promise的写法
function promisify(fn){
    return function(...args){
        return new Promise((resolve,reject)=>{
            fn(...args,function(err,data){
                if(err) reject(err);
                resolve(data);
            })
        })
    }
}
//let read = promisify(fs.readFile);
function promisifyAll(obj){
    Object.keys(obj).forEach(key=>{
        // 给所有的函数 都进行promise化
        if(typeof obj[key] === 'function'){
            obj[key+'Async'] = promisify(obj[key])
        }
    })
}
promisifyAll(fs);
fs.readFileAsync('1.txt','utf8').then(data=>{
    console.log(data);
});
