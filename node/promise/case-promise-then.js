const Promise = require('./promise-then')
//const Promise = require('./promise')

let p1 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let num = Math.random();
        if(num > .5){
            resolve('p1=>大成功')
        } else {
            reject('p1=>小失败')
        }
    },1000)
})

// let p2 = new Promise1(function(resolve,reject){
//     let num = Math.random();
//     if(num > .5){
//         resolve('p2=>大成功')
//     } else {
//         reject('p2=>小失败')
//     }
// })

let p2 = p1.then(function(value){
    console.log(value);
    //return "p2=>成功"
},function(reason){
    console.log(reason);
    //throw new Error('p1 失败了') // 如果抛出错误则走二次then的失败函数
    return "p2=>失败" // 如果有返回值，则走二次回调的成功函数
})

p2.then(function(value){
    console.log("p2 then 成功",value);
},function(reason){
    console.log("p2 then 失败",reason);
})