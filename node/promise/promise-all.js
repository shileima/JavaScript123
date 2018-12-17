/*手写promise完整版实现*/

function Promise(task) {
    let that = this;
    that.onFullfilledCallbacks = [];
    that.onRejectedCallbacks = [];
    that.status = 'pending';
    that.value = undefined;

    function resolve(value){
        setTimeout(function(){
            if(value instanceof Promise){
                return value.then(resolve,reject)
            }
            if(that.status == 'pending'){
                that.status = 'fulfilled';
                that.value = value;
                that.onFullfilledCallbacks.forEach(item => item(that.value))
            }
        })
    }

    function reject(reason){
        setTimeout(function(){
            if(that.status == 'pending'){
                that.status = 'rejected';
                that.value = reason;
                that.onRejectedCallbacks.forEach(item => item(that.value))
            }
        })
    }

    try {
        task(resolve,reject)
    } catch (e) {
        reject(e)
    }
}

function resolvePromise(promise2,x,resolve,reject){
    if(promise2 === x){
        return reject(new TypeError('循环引用'))
    }
    let called = false; // 标记是否被调用过
    if(x instanceof Promise){
        // 如果x还是没有完成，则继续循环执行，解析promise，直至完成
        if(x.status == 'pending'){
            x.then(function(y){
                resolvePromise(promise2,y,resolve,reject)
            },reject)
        } else {
            x.then(resolve,reject)
        }
    } else if (x != null && ((typeof x == 'object') || (typeof x == 'function'))){
        // 我们的promise与别人的promise进行交互，考虑兼容性，允许别人瞎写
        try {
            let then = x.then;
            if(typeof then == 'function'){
                then.call(x,function(y){
                    if(called) return;
                    called = true;
                    resolvePromise(promise2,y,resolve,reject)
                },function(err){
                    if(called) return;
                    called = true;
                    reject(err)
                })
            }else{
                resolve(x)
            }
        } catch (e){
            if(called) return;
            called = true;
            reject(e)
        }
    } else {
        if(called) return;
        called = true;
        resolve(x)
    }

}

Promise.prototype.then = function(onFullfilled,onRejected){
    let that = this;
    let promise2;
    // 如果成功和失败的回调没有传;返回一个函数让值穿透传递过去

    onFullfilled = typeof onFullfilled == 'function' ? onFullfilled : function (value) {return value};
    onRejected = typeof onRejected == 'function' ? onRejected : reason => {throw reason};

    if(that.status == 'fulfilled'){
        return promise2 = new Promise(function(resolve,reject){
            setTimeout(function(){
                try {
                    let x = onFullfilled(that.value);
                    resolvePromise(promise2,x,resolve,reject)
                } catch (e) {
                    reject(e)
                }
            })

        })

    }
    if(that.status == 'rejected'){
        return promise2 = new Promise(function(resolve,reject){
            setTimeout(function(){
                try {
                    let x = onRejected(that.value);
                    resolvePromise(promise2,x,resolve,reject)
                } catch (e) {
                    reject(e)
                }
            })
        })
    }
    if(that.status == 'pending'){
        return promise2 = new Promise(function(resolve,reject){
            that.onFullfilledCallbacks.push(function(){
                try {
                    let x = onFullfilled(that.value);
                    resolvePromise(promise2,x,resolve,reject)
                } catch (e) {
                    reject(e)
                }
            });
            that.onRejectedCallbacks.push(function(){
                try {
                    let x = onRejected(that.value);
                    resolvePromise(promise2,x,resolve,reject)
                } catch (e) {
                    reject(e)
                }

            });
        })
    }
}
// catch 的原理就是只穿失败的回调
Promise.prototype.catch = function(onRejected){
    this.then(null,onRejected)
}

// 测试用例
Promise.deferred = Promise.defer = function(){
    let defer = {}
    defer.promise = new Promise(function(resolve,reject){
        defer.resolve = resolve;
        defer.reject = reject;
    })
    return defer;
}

// promise.all 实现方法一
/* Promise.all = function(promises){
    let result = [];
    let index = 0;

    return new Promise(function(resolve,reject){
        function done(i,data){
            result[i] = data
            if(++index == promises.length){
                resolve(result)
            }
        }
        for (let i = 0; i < promises.length; i++) {
            promises[i].then(function(data){
                done(i,data)
            })
        }
    })
} */

// promise.all 实现方法二
function gen(times,cb){
    let result = [],count = 0;
    // 这里返回一个函数，在下面命名为done
    return function(i,data){
        result[i] = data
        if(++count == times){
            cb(result)
        }
    }
}
Promise.all = function(promises){
    return new Promise(function(resolve,reject){
        let done = gen(promises.length,resolve)
        for (let i = 0; i < promises.length; i++) {
            promises[i].then(function(data){
                done(i,data)
            },reject)
        }
    })
}

// promise.race 实现
Promise.race = function(promises){
    return new Promise(function(resolve,reject){
        for (let i = 0; i < promises.length; i++) {
            promises[i].then(resolve,reject)
        }
    })
}

module.exports = Promise;