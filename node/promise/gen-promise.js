const fs = require('fs');
const co = require('co');

function readFileText(filename) {
    return new Promise(function(resolve,reject){
        fs.readFile(filename,'utf8',function(err,data){
            err ? reject(err) : resolve(data)
        })
    })
};

/*readFileText('./2.txt').then(data => {
    console.log(data);
}, err => {
    console.log(err);
});*/

// 生成器
function *gen(){
    console.log('start...');
    let a = yield readFileText('./1.txt')
    console.log('a:',a);
    let b = yield readFileText('./2.txt')
    console.log('b:',b);
    let c = yield readFileText('./3.txt')
    console.log('c:',c);
    return c;
}
// 调用生成器函数gen，返回迭代器函数it
let it = gen();
//it.next() 调用next 返回一个对象{ value: Promise { <pending> }, done: false }

/*// 手动迭代
let r1 = it.next();
r1.value.then(function(data){
    let r2 = it.next(data)
    r2.value.then(function(data){
        let r3 = it.next(data)
        r3.value.then(function(data){
            let r4 = it.next(data)
            console.log('r4:',r4);
        })
    })
})*/

// co 库自动迭代
//co(it).then(data => { console.log(data) })

/* 自动迭代，手动实现 co 库自动执行迭代器 */
function myCo(it){
    return new Promise(function (resolve,reject) {
        !function next(lastVal){
            let {value,done} = it.next(lastVal)
            if(done){
                resolve(value)
            } else {
                value.then(next,reject)
            }
        }('这里随便传')
    })
}
myCo(it).then(data => { console.log(data) })

