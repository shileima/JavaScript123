/* 1、世界上最快的Promise库 bluebird*/
let Promise = require('bluebird');
const fs = require('fs');
let readFile = fs.readFile;
//let readFileAsync = Promise.promisify(readFile);
let readFileAsync = Promisify(readFile);

// promisify 如何实现？
function Promisify(fn){
    return function(...arg){
        return new Promise(function(resolve,reject){
            fn.apply(null,[...arg,function (err,data) {
                err ? reject(err) : resolve('Promisify:'+data)
            }])
        })
    }
}

console.time('bluebird cost')
readFileAsync('1.txt','utf8').then(function (data) {
    console.log('bluebird:',data);
    console.timeEnd('bluebird cost')
    console.log('--------------------------');
})

/* 2、原生nodejs fs.readFileSync*/
console.time('node api cost')
let data = fs.readFileSync('1.txt','utf8')
console.log('node api:',data);
console.timeEnd('node api cost')
console.log('--------------------------');

/* 3、Node readFile api callback 实现异步*/
console.time('callback cost')
readFile('1.txt','utf8',function (err,data) {
    if(err){
        console.log(err);
        return;
    }
    console.log('callback:',data);
    console.timeEnd('callback cost')
    console.log('--------------------------');
})

/*结论：Node.js 原生 Api 实现异步最快*/





