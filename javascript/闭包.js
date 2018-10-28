/* 闭包用来干啥？ */

/* 1，维持一个变量持续写入内存 */
/* 2，跨作用域访问值 */

function foo(){
    var a = 10;
    function bar(){
        a++;
        console.log(a)
    }
    return bar;
}

var b = foo();
b()
b()
b()

function foo(){
    var a = 10;
    function bar(){
        console.log(a)
    }
    bar(); // 这里最好使用 return bar; 再在外面作用域进行调用
}
foo()

function t(){
    var age = 20
    return function(){
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