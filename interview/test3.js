// 1
var x = 10;
function fn(x = 2, y = function () { return x + 1 }) {
    console.log('x1-', x);
    console.log('y-', y);
    var x = 5;
    console.log('x2-', x);
    return y();
}
fn()

// 2
var x = 1;
function foo(x, y = function () { x = 3; }) {
    var x = 5; // var
    // x = 5; // 无 var
    y();
    console.log(x);
};
foo(); //3
console.log(x); //1

// 2.1代码解释 以上代码另一种写法
var x = 1;
function foo() {
    var x; 
    const y = function () { x = 3; };
    {
        let x = 5; // var
        // x = 5; // 无 var
        y();
        console.log(x);
    }
    console.log(x);
};
foo(); //3
console.log(x); //1

// 总结：作用域内带 var let 是本作用域内可读的值，无变量var let的话读外层作用域的值；
// 函数参数或默认参数会形成函数内第一层（父层作用域）作用域，函数内代码是子作用域代码，例如 2.1 代码解释