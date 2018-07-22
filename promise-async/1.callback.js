// 高阶函数

// 1.将函数作为函数的参数传递进去(回调)
// 传统的callback promise可以解决callback的问题
// lodash after async库 Promise.all  都有闭包的效果
function after (times,callback){
    return function(){
        times--;
        if(times == 0){
            callback();
        }
    }
}
let fn = after(3,function(){
    console.log('调用了三次 才执行的方法')
})
fn();
fn();
fn();

// 2.一个函数返回一个函数
// 判断类型 
// typeof instanceof constructor Object.prototype.toString.call
function isType(type) { // [object String]
    return function (content) {
        let t = Object.prototype.toString
            .call(content).replace(/\[object\s|\]/g, '');
        return t === type
    }
}
let types = ['String','Undefined','Function','Number'];
let util = {}; // util.isString isUndefined
types.forEach(t=>{
    util['is'+t] = isType(t);
});
console.log(util.isString('hello'));


// function isType(content,type){ // [object String]
//     let t = Object.prototype.toString
//     .call(content).replace(/\[object\s|\]/g,'');
//     return t === type
// }


// promise的好处
// 可以解决一些异步的问题
// 1.回调地狱 回调的嵌套关系
 let fs = require('fs');
// fs.readFile('1.txt','utf8',function(err,data){
//     fs.readFile(data,'utf8',function(err,data){
//         fs.readFile(data,'utf8',function(err,data){
//             console.log(data);
//         });
//     });
// });
// 2.多个回调同步结果的情况
// 1) 通过after函数
// 2) 发布订阅 redux vue 
// let fs = require('fs');
// function after(times,callback){
//     let arr = [];
//     return function(data){
//         arr.push(data);
//         if(--times == 0){
//             callback(arr);
//         }
//     }
// }
// let fn = after(2,function(data){
//     console.log(data);
// })


// 发布订阅 观察者
// 发布订阅 发布(发布时一次执行) 订阅(先把他暂存起来)
let fs = require('fs');
let event = {
    arr:[],
    result:[],
    on(fn){
        this.arr.push(fn);
    },
    emit(data){
        this.result.push(data);
        this.arr.forEach(fn=>fn(this.result));
    }
}
event.on(function(data){
    if(data.length === 2){
        console.log(data); // 最终的结果
    }
});
fs.readFile('1.txt','utf8',function(err,data){ 
    event.emit(data);
})
fs.readFile('2.txt','utf8',function(err,data){ 
    event.emit(data);
});

// 默认读取文件 在vscode 中读取的永远是根目录下的文件