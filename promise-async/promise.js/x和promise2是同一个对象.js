let promise = new Promise((resolve,reject)=>{
    resolve();
});
// 不能自己等自己
let promise2 = promise.then(data=>{
    return promise2
});
