let arr = [1,2,3,4,5]

// arr.reduce((val(初始值或0),item(当前项元素),index(当前项索引),origin(当前数组)) => {
//    return val + item // 返回值会成为下一次函数执行的val(初始结果)
// },5)
//
// reduce 函数可以传递1个或2个参数，第一个参数是一个函数，第二个是计算的初始值

console.log('原生reduce',arr.reduce((val, item) => val + item));

Array.prototype.reduceDiy = function(reducer,initialVal=0){
    for(let i=0; i<this.length; i++){
        initialVal = reducer(initialVal,this[i],i,this)
    }
    return initialVal;
}
Array.prototype.reduceRightDiy = function(reducer,initialVal=0){
    for(let i=this.length-1; i>=0; i--){
        initialVal = reducer(initialVal,this[i],i,this)
    }
    return initialVal;
}

console.log('重写reduce',arr.reduceDiy((val, item) => val + item));
console.log('重写reduceRight',arr.reduceRightDiy((val, item) => val + item));