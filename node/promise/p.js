function Promise1(task) {
    let that = this;
    that.onFullfilledCallbacks = [];
    that.onRejectedCallbacks = [];
    that.status = 'pending';
    that.value = undefined;

    function resolve(value){
        if(that.status == 'pending'){
            that.status = 'fulfilled';
            that.value = value;
            that.onFullfilledCallbacks.forEach(item => item(that.value))
        }
    }

    function reject(reason){
        if(that.status == 'pending'){
            that.status = 'rejected';
            that.value = reason;
            that.onRejectedCallbacks.forEach(item => item(that.value))
        }
    }

    try {
        task(resolve,reject)
    } catch (e) {
        reject(e)
    }
}

Promise1.prototype.then = function(onFullfilled,onRejected){
    let that = this;

    if(that.status == 'fulfilled'){
        onFullfilled(that.value)
    }
    if(that.status == 'rejected'){
        onRejected(that.value)
    }
    if(that.status == 'pending'){
        that.onFullfilledCallbacks.push(onFullfilled);
        that.onRejectedCallbacks.push(onRejected);
    }
}

module.exports = Promise1;