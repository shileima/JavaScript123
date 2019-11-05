let Promise = require('./3.promise');
let promise = new Promise((resolve,reject)=>{
    resolve();
});
let promise2 = promise.then(data=>{
    return new Promise((resolve,reject)=>{
        resolve(new Promise((resolve,reject)=>{
            resolve(123)
        }))
    })
})
.then(data=>{
    console.log(data);
},(err)=>{
    console.log('err',err);
    return 'ok'
}).then(data=>{
    console.log(data);
})