// 1.promise 两个作用
// 解决回调地狱 恶魔金字塔 (链式调用)
// “同步”异步的执行结果
let fs = require('fs');

function read(filePath,encoding){
    return new Promise((resolve,reject)=>{
        fs.readFile(filePath,encoding,(err,data)=>{
            if(err) reject(err);
            resolve(data);
        });
    })
}
// 下一次的输入需要上一次的输出 (有依赖关系)
// 1.如果一个promise执行完后 返回的还是一个promise，会把这个promise 的执行结果，传递给下一次then中
// 2.如果then中返回的不是promise 是一个普通值，会将这个普通值作为下次then的成功的结果
// 3.如果当前then中失败了 会走下一个then的失败
// 4.如果返回的是undefined 不管当前是成功还是失败 都会走下一次的成功
// 5.catch是错误没有处理的情况下才会走
// 6.then中可以不写东西，相当于白写 （值的穿透）
read('1.txt','utf8').then(data=>{
    return read(data,'utf8')
}).then((data)=>{
    return read(data,'utf8');
}).then(data=>{
    return data.split('').reverse().join('')
}).then(data=>{
    throw new Error('出错 ');
}).then((data)=>{

}).then(null,(err)=>{
    console.log('error')
})
// .then(data=>{
//     console.log(data);
// },()=>{console.log('xxx')})
// .catch(err=>{
//     console.log('catch')
// }).then(data=>{
//     throw new Error();
// }).then(data=>{
//     throw new Error();
// });

// jquery的链式调用 return this

let promise = new Promise((resolve,reject)=>{
    resolve();
});
// 返回的必须是一个新的promise 因为promise成功后不能在走失败
// 只能创建一个新的promise 执行逻辑
let promise2 = promise.then(data=>{
    // promise成功了 如果返回的this 那不能在走向失败
    throw new Error();
})
