/*
 * @Description: 
 * @Date: 2020-12-14 17:47:24
 * @LastEditors: mashilei@meituan.com
 * @LastEditTime: 2021-03-12 11:00:03
 * @FilePath: /JavaScript123/es6/promise-async/promise.js/4.case.js
 */
let Promise1 = require('./4.promise');
let fs = require('fs');

let p = new Promise1((resolve,reject)=>{
    resolve();
})
p.then(data=>{
    return new Promise((resolve,reject)=>{
        resolve(1)
    })
}).then(data=>{
    console.log(data);
})

function read(filePath,encoding){
    let dfd = Promise.defer()
    fs.readFile(filePath,encoding,(err,data)=>{
        if(err)dfd.reject(err);
        dfd.resolve(data);
    });
    return dfd.promise;
}
read('note.md','utf8').then(data=>{
    console.log(data);
})
let p = new Promise((resolve,reject)=>{
    reject(123);
})
p.then().then((data)=>{
    console.log(data)
},(err)=>{
    console.log('err',err);
})