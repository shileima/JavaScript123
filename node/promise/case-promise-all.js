/*原理实现 promise.all promise.race */

const Promise = require('./promise-all')
console.time('cost')
let p1 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve(100)
    },1000)
})

let p2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve(200)
    },500)
})

Promise.race([p1,p2]).then(data => {
    console.log('success',data)
    console.timeEnd('cost')
}, function(reason){
    console.log('fail',reason)
    console.timeEnd('cost')
})

/*为了保持程序执行同步或异步的一致的可测试性*/

let cache;
setTimeout(function(){
    !function set() {
        cache = 100;
        setTimeout(function () {
            cache = 100;
        })
    }()
})
console.log(cache);
