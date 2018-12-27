console.log('start');
setTimeout(()=>{
    console.log("setTimeout");
    process.nextTick(function(){
        console.log("nextTick 2");
    })
},0)
new Promise(function(resolve,reject){
    console.log("promise");
    resolve()
}).then(function () {
    console.log("promise then");
})
process.nextTick(() => {
    console.log("nextTick 1");
})
console.log("end");

// start -> promise -> end -> nextTick 1 -> promise then -> setTimeout -> nextTick 2
/*
* 1、同步代码优先; start -> promise -> end
* 2、微任务优先; nextTick 1 -> promise then; nextTick优先级大于promise.then
* 3、宏任务最后执行; 包括timer 和 I/O 事件(readFile等)
* */
