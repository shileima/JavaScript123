function Promise(executor){
    let self = this;
    self.value = undefined;
    self.reason = undefined;
    self.status = 'pending';
    self.onResolvedCallbacks = [];// 存放then中成功的回调
    self.onRejectedCallbacks = []; // 存放then中失败的回调
    function resolve(value){
        if(self.status === 'pending'){
            self.value = value;
            self.status = 'resolved';
            self.onResolvedCallbacks.forEach(fn=>fn());
        }
    }
    function reject(reason){
        if(self.status === 'pending'){
            self.reason = reason;
            self.status = 'rejected';
            self.onRejectedCallbacks.forEach(fn=>fn());
        }
    }
    // 如果函数执行时发生异常 就走到失败中
    try{
        executor(resolve,reject);
    }catch(e){
        reject(e);
    }
}
Promise.prototype.then = function(onFulfilled,onRejected){
    let self = this;
    if(self.status === 'resolved'){
        onFulfilled(self.value);
    }
    if(self.status === 'rejected'){
        onRejected(self.reason);
    }
    if(self.status === 'pending'){
        // 保存回调函数
        self.onResolvedCallbacks.push(()=>{
            onFulfilled(self.value);
        });
        self.onRejectedCallbacks.push(()=>{
            onRejected(self.reason)
        });
    }
}
module.exports = Promise;