/*promise 简版实现，只能调用一次then函数，不能链式调用*/

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

Promise.prototype.then = function(onFullfilled,onRejected){
    let that = this;
    // 如果成功和失败的回调没有传;返回一个函数让值穿透传递过去

    onFullfilled = typeof onFullfilled == 'function' ? onFullfilled : function (value) {return value};
    onRejected = typeof onRejected == 'function' ? onRejected : reason => {throw reason};

    if(that.status == 'fulfilled'){
        onFullfilled(that.value);
    }
    if(that.status == 'rejected'){
        onRejected(that.value);
    }
    if(that.status == 'pending'){
        that.onFullfilledCallbacks.push(function(){
            onFullfilled(that.value);
        });
        that.onRejectedCallbacks.push(function(){
            onRejected(that.value);
        });
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

module.exports = Promise;