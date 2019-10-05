/* 闭包用来干啥？ */

/* 1，维持一个变量持续写入内存 */
/* 2，跨作用域访问值 */

function foo() {
    var a = 10;
    function bar() {
        a++;
        console.log(a)
    }
    return bar;
}

var b = foo();
b()
b()
b()

function foo() {
    var a = 10;
    function bar() {
        console.log(a)
    }
    bar(); // 这里最好使用 return bar; 再在外面作用域进行调用
}
foo()

function t() {
    var age = 20
    return function () {
        console.log(age++)
        // 这里已经将 age 锁定在返回函数的闭包中，
        //作用域是在函数定义的时候已经固定
    }
}

var age = 100
var tmp = t()
console.log(tmp.toString())
// tmp 函数里已经锁定了上层函数的 age = 20
// function(){
//     console.log(age) 
//      这里的 age 就是上面函数返回的闭包里锁定了 age = 20
//     // 这里已经将 age 锁定在返回函数的闭包中，
//     //作用域是在函数定义的时候已经固定
// }
tmp() // ?
tmp() // ?

var func = function () {
    // 局部变量 a 在闭包内被引用，所以不会销毁
    var a = 1;
    var b = 10;
    console.log(b)
    return function () {
        a++;
        console.log(a)
    }

}
var f = func()
f()
f()
f()
f()

// 闭包应用 计算乘积

var muti = (function () {
    var cache = {};
    var args = Array.prototype.join.call(arguments, ',');
    //console.log(args);
    if (args in cache) { console.log('cache'); return cache[args] };
    var a = 1;
    for (var i = 0; i < arguments.length; i++) {
        a = a * arguments[i]
    }
    return cache[args] = a;
})()

console.log(muti(2, 3, 4));
console.log(muti(2, 3, 5));
console.log(muti(2, 3, 4)); // 走 cache，无需再计算

var add = function () {
    var a = 0;
    for (var i = 0; i < arguments.length; i++) {
        a = a + arguments[i];
    }
    return a;
}
console.log(add(2, 3, 4));

