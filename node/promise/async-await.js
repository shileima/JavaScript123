/* 终极解决方案 async/await
* 实际上是generator + promise 的语法实现
* */
const fs = require('fs');
function readFileText(filename) {
    return new Promise(function(resolve,reject){
        fs.readFile(filename,'utf8',function(err,data){
            //throw new Error('抛出异常...')
            err ? reject(err) : resolve(data)
        })
    })
};

/* 如果不加 await ，则返回 Promise { <pending> } promise还未执行完就付给了a */
async function read() {
    console.time('promise')
    let a = await readFileText('1.txt');
    console.log('===============================');
    console.log(a);

    try {
        let b = await readFileText('2.txt');
        console.log(b);
    } catch (e) {
        console.log(e);
    }

    let c = await readFileText('3.txt');
    console.log(c);
    console.timeEnd('promise')
    return '执行完毕！';//通过promise.then来获取
};

let r = read()
/* 如果async 函数 return 一个值，则需要通过promise.then()
 * 来获取，这是因为async函数返回一个Promise对象Promise { <pending> } */
console.log(r); //async函数返回一个 Promise { <pending> }
r.then(data => {
    console.log(data); // 执行完毕！

})


/* 可以通过nodejs 的 fs.readFileSync(可以同步执行代码)来简化 */

function readSync(){
    console.time('readFileSync')
    let a = fs.readFileSync('1.txt','utf8')
    console.log('readFileSync:',a);

    let b = fs.readFileSync('2.txt','utf8')
    console.log('readFileSync:',b);

    let c = fs.readFileSync('3.txt','utf8')
    console.log('readFileSync:',c);
    console.timeEnd('readFileSync')
}
readSync()

/*
* Node 原生的异步api fs.readFileSync 比 readFile + Promise 速度快 7 倍以上
* */











