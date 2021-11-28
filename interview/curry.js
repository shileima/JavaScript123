// 柯里化函数实现一
const add = (function (length) {
    let allArgs = [];
    function _add(...args) {
        allArgs = [...allArgs, ...args];
        if (allArgs.length >= length) {
            let sum = allArgs.reduce((acc, curr) => acc + curr, 0);
            allArgs.length = 0;
            return sum;
        } else {
            return _add;
        }
    }
    return _add;
})(5); // 只能接受特定数量的参数
console.log(add(0, 2, 3, 4, 5))
console.log(add(1, 2)(3, 4, 5))

// 柯里化实现二，alert 会调用toString 方法
// alert([1,2,3].reduce((p,c)=>p+c,0)) // 6
function add2(...args) {
    var _add = add2.bind(null, ...args);
    _add.toString = function () {
        return args.reduce((sum, item) => sum + item, 0)
    }
    return _add
}
// alert(add2(0, 2, 3, 4, 5)(10))
// 最佳实现三
function curry(fn, ...args) {
    return args.length === fn.length ? fn(...args) : (...extraArgs) => curry(fn, ...args, ...extraArgs)
}
function addFn(a, b, c, d, e) {
    return a + b + c + d + e;
}
let add3 = curry(addFn);
console.log(add3);
console.log(add3(1, 2, 3, 4, 5));//15
console.log(add3(1)(2, 3)(4, 5));//15
console.log(add3(1)(2)(3)(4)(5));//15

// 递归加法一
var add4 = function (m) {
    var temp = function (n) {
        return add4(m + n);
    }
    temp.toString = function () {
        return m;
    }
    return temp;
}

console.log((add4(3)(4)(5)(6)).toString()); // 18
// 阶乘算法二
function add(...arg) {
    var a = [...arg];
    _add = function (...innerArg) {
        if (innerArg.length === 0) {
            return a.reduce(function (a, b) { return a + b })
        } else {
            // [].push.apply(a, innerArg)
            // a = [...a, ...innerArg]
            a.push(...innerArg)
            return _add;
        }
    }
    return _add/*  */
}

console.log(add(1)(2)(3)(4)())   // 10

function add(x) {
    var sum = x;
    var tmp = function (y) {
        sum = sum + y;
        return tmp;
    };
    tmp.toString = function () {
        return sum;
    };
    return tmp;
}
console.log(add(1)(2)(3).toString());
console.log(add(1)(2)(3)(4));


function addFn(a, b, c, d, e) {
    return a + b + c + d + e;
}

function curry(fn,...arg1){
    return arg1.length === fn.length?fn(...arg1):
    function(...arg2){
        return curry(fn,...arg1,...arg2)
    }
}


let add3 = curry(addFn);
console.log(add3(1)(2, 3)(4, 5));//15

//line=readline()
//print(line)
// console.log('Hello World!');
function addFn(a, b, c, d, e) {
    return a + b + c + d + e;
}

function curry(fn,...arg1){
    return arg1.length === fn.length?fn(...arg1):
    function(...arg2){
        return curry(fn,...arg1.concat(arg2))
    }
}


let add3 = curry(addFn);
console.log(add3(1)(2, 3)(4, 5));//15


function curry(Fn,...args){
    const tempArr = [];
    const len = args.length;
    function adder(){
        tempArr.push(...Array.from(arguments));
        if(tempArr.length === len){
            return tempArr.reduce(function(a,b){return a+b});
        }
        return adder;
    }
    return adder;
}
function addFn(a, b, c, d, e) {
return a + b + c + d + e;
}
const add3 =  curry(addFn);
console.log(add3(1)(2, 3)(4, 5));//15