var b = 20;
async function fn(){
    let a = 10;
    let myName = await fn2('cooking'); //  await 是要等待 promise的. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await
    console.log(myName);
}
function fn2(name) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('2s 后打印出 ',name);
        }, 2000);
    });
}
fn() // cooking

/*获取async方法里的异步数据 方法一*/

/*async function getDate(){
    return "获取async方法里的异步数据 方法一"
}
let p = getDate();
p.then(data => {
    console.log(data)
})*/

/* 错误写法*/

/*async function getDate(){
    return "获取async方法里的异步数据 错误写法"
}
let p = await getDate();
console.log(p);*/

/*方法二*/

async function test(){
    let myName = await getData("Loading")
    console.log(myName)
}

function getData(name){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(name)
        },3000)
    })
}
test()

/* 错误写法 */
/*async function test(){
    let myName = await getDate('setTimeout 中的数据')
    console.log(myName)
}

async function getDate(name){
    // setTimeout 的返回值是一个id，整型，用于取消这个 setTimeout
    // 所以要想获得setTimeout 的异步值，外层必须加一个return new Promise 封装
    // 内部用 resolve() 来赋予 Promise 返回值，例如上面的写法
    let p = await setTimeout(()=>{
        return name;
    },2000)
    return p;
}
test()*/


