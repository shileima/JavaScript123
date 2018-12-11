// arguments
console.log("----------slice");
function print(){
    // arguments 是一个参数的集合，是一个对象,是一个类数组
    console.log(typeof arguments)
    let arr = Array.prototype.slice.call(arguments,0)
    arr.forEach(item => console.log(item))
}

print(1,2,3,4)


console.log("----------forEach");
function print2(){
    Array.prototype.forEach.call(arguments,item => console.log(item))
}

print2(4,5,6,7)

console.log("----------类数组转数组");
function print3(){
    Array.from(arguments).forEach(item => console.log(item))
}

print3(7,8,9,10)

console.log("----------[...arguments]");
function print4(){
    // arguments 是对象但不是数组，是类数组的对象
    // console.log(arguments instanceof Array) // false
    // console.log([...arguments] instanceof Array) // true

    [...arguments].forEach(item => console.log(item))
}

print4(11,12,13,14)

// Array 新增方法
let arr5 = Array(3)
let arr6 = Array.of(3)
console.log(arr5);
console.log(arr6);