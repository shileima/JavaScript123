// redux-saga (generator) 生成器 迭代器
// 生成器 生成的是迭代器
// 生成器函数可以暂停 默认的函数 会一路走到底
// 碰到yield(生产 产出) 就可以实现暂停功能 
// 可以往里面放东西
// function* say() {
//     yield 1
//     yield 2
//     yield 3
// }
// let it = say(); // it  就是iterator

// function next() {
//     let { value, done } = it.next();
//     console.log(value);
//     if(!done) next(); // 直到迭代完成
// }
// next();
/*
function * say(){
    let a = yield '去厕所1';
    console.log(a);
    let b = yield '去厕所2';
    console.log(b);
}
let it = say();
//{value:'去厕所1',done:false}
console.log(it.next()); // 第一次调用next时 是不允许传参的(你传递了也没有效果)
// a= hello {value:'去厕所2',done:false}
console.log(it.next('hello'))
// b=xxx {value:undefined,done:true}
console.log(it.next('xxx'));
*/
// 可以配合promise来使用
let bluebird = require('bluebird');
let fs = require('fs');
let read = bluebird.promisify(fs.readFile);

// generator + co
// 回调 支持return 而且像同步
function* r() {
    let r1 = yield read('1.txt', 'utf8');
    let r2 = yield read(r1, 'utf8');
    let r3 = yield read(r2, 'utf8');
    return r3;
}
function co(it) {
    return new Promise((resolve, reject) => {
        function next(data){
            let { value, done } = it.next(data);
            if(!done){
                value.then(data=>{
                    next(data);
                },reject);
            }else{
                resolve(value);
            }
        }
        next();
    })
}
co(r()).then(data => {
    console.log('xxx',data);
});

function*a(){
    yield 1
    yield 3
}
function *b(){
    yield *a(); // 在生成器函数中使用生成器函数 需要用*
    yield 2;
}
let it = b()
console.log(it.next());




// let { value, done } = it.next();
// value.then(data => { // 2.txt
//     console.log(data);
//     let {value ,done} = it.next(data);
//     value.then(data=>{
//         let {value ,done} = it.next(data);
//         value.then(data=>{
//             let {value ,done} = it.next(data);
//             console.log(value);
//         });
//     });
// })