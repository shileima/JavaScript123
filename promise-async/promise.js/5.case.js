let Promise1 = require('./5.promise');
let fs = require('fs');
function read(filePath,encoding){
    let dfd = Promise1.defer()
    fs.readFile(filePath,encoding,(err,data)=>{
        if(err)dfd.reject(err);
        dfd.resolve(data);
    });
    return dfd.promise;
}
// all执行后会返回一个新的promise  所以promise执行成功后才算成功，返回值是数组类型，有一个失败 就失败了
Promise.all = function(promises){
    return new Promise((resolve,reject)=>{
        let arr = [];
        let i = 0;
        function processData(index,data){
            arr[index] = data;
            if(++i == promises.length){
                resolve(arr);
            }
        }
        for(let i = 0;i<promises.length;i++){
            promises[i].then(data=>{ // data是成功的结果
                processData(i,data);
            },reject);
        }
    })
}
Promise.race = function(promises){
    return new Promise((resolve,reject)=>{
        for(let i = 0;i<promises.length;i++){
            promises[i].then(resolve,reject);
        }
    })
}
// 谁快用谁的结果 一个成功就成功 一个失败就失败了
Promise.race([read('2.txt','utf8'),read('1.txt','utf8')]).then(data=>{
     console.log(data);
});



// catch的实现就是基于then的 可以不传成功
// Promise.reject(123).then().catch(e=>{
//     console.log(e);
// })

// Promise.reject(123).then().then(null,e=>{
//     console.log(e);
// })