// js 运行机制，同步任务
// 宏任务 script setTimeout setInterval
// 微任务 Promise 微任务优先，回调也优先，等微任务执行完了
// 再去 主线程已经注册的执行异步任务 礼物 setTimeout

setTimeout(() => {
    console.log('1,宏任务setTimeout 异步任务')
},0)

new Promise(resolve => {
    console.log('2, 微任务 new Promise 进来了')
    for(let i=0; i<1000; i++){
        i == 100 && resolve()
    }
}).then(() => {
    console.log('3, 微任务 Promise then 函数，微任务优先')
})

console.log('4, 最后同步任务')