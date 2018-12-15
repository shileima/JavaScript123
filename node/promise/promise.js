const Promise1 = require('./p')

let p1 = new Promise1(function(resolve,reject){
    setTimeout(function(){
        let num = Math.random();
        if(num > .5){
            resolve('p1=>大成功')
        } else {
            reject('p1=>小失败')
        }
    },2000)
})

let p2 = new Promise1(function(resolve,reject){
    let num = Math.random();
    if(num > .5){
        resolve('p2=>大成功')
    } else {
        reject('p2=>小失败')
    }
})

p1.then(function(value){
    console.log(value);
},function(reason){
    console.log(reason);
})

p2.then(function(value){
    console.log(value);
},function(reason){
    console.log(reason);
})