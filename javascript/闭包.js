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