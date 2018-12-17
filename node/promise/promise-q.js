/* q promise 库使用*/

// 用法一 延迟对象
const Q = require('q');
const fs = require('fs')

function readFile(filename){
    let defer = Q.defer()
    fs.readFile(filename,'utf8',function(err,data){
        if(err){
            defer.reject(err)
        } else {
            defer.resolve(data)
        }
    })
    return defer.promise;
}

readFile('./1.txt').then(function (data) {
    console.log(data);
})

// 用法二 Q.all()
function addLoop(a,b){
    // return a Promise
    return Q.spread([a,b],function(a,b){
        return a + b;
    })
}

Q.all([
    addLoop(2, 6),
    addLoop(10, 20)
]).then(function(data){
    console.log(data)
})


