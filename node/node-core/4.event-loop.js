const fs = require('fs');

fs.readFile('test.js', () => {
    setTimeout(() => console.log(1));
    setImmediate(() => console.log(2));
});
/* 上面代码会先进入 I/O callbacks 阶段，然后是 check 阶段，最后才是 timers 阶段。
因此，setImmediate才会早于setTimeout执行。 */

setTimeout(() => console.log(3), 0);
setImmediate(() => console.log(4));
console.log(5);

// =======================================
/*setImmediate(function(){
    console.log('4');
});
setImmediate(function(){
    console.log('5');
});
process.nextTick(function(){
    console.log('1');
    process.nextTick(function(){
        console.log('2');
        process.nextTick(function(){
            console.log('3');
        });
    });
});

console.log('next');*/

Promise.resolve().then(data => {
    console.log('p1');
    setTimeout(() => {
        console.log('setTimeout 2');
    }, 0)

})

setTimeout(() => {
    console.log('setTimeout 1');
    Promise.resolve().then(data => {
        console.log('p2')
    })
}, 0)

