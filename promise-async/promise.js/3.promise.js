function Promise(executor) {
    let self = this;
    self.value = undefined; // 成功的值
    self.reason = undefined; // 失败的原因
    self.status = 'pending'; // 值是pending状态
    self.onResolvedCallbacks = []; // 可能new Promise的时候会有异步操作，保存成功和失败的回调 
    self.onRejectedCallbacks = [];
    function resolve(value) { // 把状态改成成功态
        if (self.status === 'pending') { // 只有等待态 可以改变状态
            self.value = value;
            self.status = 'resolved';
            self.onResolvedCallbacks.forEach(fn => fn());
        }
    }
    function reject(reason) { // 把状态改成失败态
        if (self.status === 'pending') {
            self.reason = reason;
            self.status = 'rejected';
            self.onRejectedCallbacks.forEach(fn => fn());
        }
    }
    try {
        // 默认new Promise时 应该执行对应的执行器(同步执行)
        executor(resolve, reject);
    } catch (e) { // 如果执行exectuor时 发生错误 就会让当前的promise变成失败态
        reject(e);
    }
}
/**
 * 
 * @param {*} promise2  then的返回值 (返回的新的promise)
 * @param {*} x  then中成功或者失败函数的返回值
 * @param {*} resolve promise2的resolve
 * @param {*} reject  promise2的reject
 */
// 所有的promise都遵循这个规范 (所有的promise可以通用)

function resolvePromise(promise2,x,resolve,reject){
    // promise2和函数执行后返回的结果是同一个对象
    
    if(promise2 === x){
        return reject(new TypeError('Chaining cycle'));
    }
    let called;
    // x可能是一个promise 或者是一个普通值
    if(x!==null && (typeof x=== 'object' || typeof x === 'function')){
        try{
            let then = x.then; // 取对象上的属性 怎么能报异常呢？(这个promise不一定是自己写的 可能是别人写的 有的人会乱写)
            // x可能还是一个promise 那么就让这个promise执行即可
            // {then:{}}
            // 这里的逻辑不单单是自己的 还有别人的 别人的promise 可能既会调用成功 也会调用失败
            if(typeof then === 'function'){
                then.call(x,y=>{ // 返回promise后的成功结果
                    // 递归直到解析成普通值为止
                    if(called) return; // 防止多次调用
                    called = true;
                    // 递归 可能成功后的结果是一个promise 那就要循环的去解析
                    resolvePromise(promise2,y,resolve,reject);
                },err=>{ // promise的失败结果
                    if(called) return;
                    called = true;
                    reject(err);
                });
            }else{
                resolve(x);
            }
        }catch(e){
            if(called) return;
            called = true;
            reject(e);
        }
    }else{ // 如果x是一个常量
        resolve(x);
    }
}
// then调用的时候 都是异步调用 (原生的then的成功或者失败 是一个微任务)
Promise.prototype.then = function (onFulfilled, onRejected) {
    // 成功和失败的回调 是可选参数
    
    // onFulfilled成功的回调 onRejected失败的回调
    let self = this;
    let promise2;
    // 需要没次调用then时都返回一个新的promise
    promise2 = new Promise((resolve, reject) => {
        if (self.status === 'resolved') {
            setTimeout(()=>{
                try {
                    // 当执行成功回调的时候 可能会出现异常，那就用这个异常作为promise2的错误的结果
                    let x = onFulfilled(self.value);
                    //执行完当前成功回调后返回结果可能是promise
                    resolvePromise(promise2,x,resolve,reject);
                } catch (e) {
                    reject(e);
                }
            },0)
        }
        if (self.status === 'rejected') {
            setTimeout(()=>{
                try {
                    let x = onRejected(self.reason);
                    resolvePromise(promise2,x,resolve,reject);
                } catch (e) {
                    reject(e);
                }
            },0)
        }
        if (self.status === 'pending') {
            self.onResolvedCallbacks.push(() => {
                setTimeout(()=>{
                    try {
                        let x = onFulfilled(self.value);
                        resolvePromise(promise2,x,resolve,reject);
                    } catch (e) {
                        reject(e);
                    }
                },0)
            });
            self.onRejectedCallbacks.push(() => {
                setTimeout(()=>{
                    try {
                        let x = onRejected(self.reason);
                        resolvePromise(promise2,x,resolve,reject);
                    } catch (e) {
                        reject(e);
                    }
                },0)
            });
        }
    });
    return promise2
}
// 为什么加setTimeout (规范要求的)

Promise.defer = Promise.deferred = function(){
    let dfd = {};
    dfd.promise = new Promise((resolve,reject)=>{
        dfd.resolve = resolve;
        dfd.reject = reject;
    })
    return dfd;
}
// npm install promises-aplus-tests -g
module.exports = Promise;