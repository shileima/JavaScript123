/* 串联自己的promise与其他模块promise以及q */
let myPromise = require('./promise-all');
let Q = require('q');

let p1 = new myPromise(function(resolve,reject){
    resolve(100)
});

let p2 = p1.then(function(data){
    return new Promise(function(resolve,reject){
        resolve(data + 100)
    })
})

let p3 = p2.then(function(data){
    let defer = Q.defer();
    defer.resolve(data + 100);
    return defer.promise;
})

p3.then(function(data){
    console.log(data);
})