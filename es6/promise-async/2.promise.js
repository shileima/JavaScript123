// promise 承诺 允诺
// promiseA+规范 https://promisesaplus.com/

// Promise 有兼容性问题的 node环境运行的默认都支持
// 自己写一个兼容版的promise库 

// promise 三种状态 等待态 pending 成功态 resolved 失败态 rejected
// 状态的转化 pending -> resolved
//           pending -> rejected
//           不对的resolved <=> rejected  状态只会更改一次

let promise = new Promise(function(resolve,reject){
    throw new Error('出错了')
});
promise.then(()=>{
    console.log('success')
},()=>{
    console.log('error');
});
promise.then(()=>{
    console.log('success')
},()=>{
    console.log('error');
});

// 1.executor 默认时new的时候就自动执行
// 2.每个promise的实例 都有then方法 
// 3.then方法中有两个参数 分别是成功的回调和失败的回调
// 4.then方法是异步的(微任务)
// 5.同一个promise的实例可以then多次,成功时回调用所有的成功方法，失败时会调用所有的失败方法
// 6.new Promise中可以支持异步行为
// 7.如果发现错误就会走入失败态