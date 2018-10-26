// 词法作用域分析 -> 函数
// 0，函数执行瞬间：会将此函数生成一个 object active，AO 活动对象
// (一个函数作用域内所有变量都在 AO 下)

// 1，接收参数，以参数名为属性名称，参数值为属性值

// 2，分析 var 声明，如果发现 AO 存在相同属性，不做任何影响;
// 否则，在 AO 上生城一个属性，以 var 的变量名为属性名，值为 undefined

// 3，分析函数声明,如果有与函数名同名的属性，则会被此函数覆盖

// 4，执行 (就是赋值)

// 5，函数声明比函数表达式优先级要高

var a = 10;
function num(a){
	// 这里相当于创建了一个局部变量 a 不影响外层全局变量 var a = 10;
    a += 3;
}
num(a); 
console.log(a);  // 10

function t(age){
    var age = 5;
    console.log(age)
}
t(99) // 5

var a = [1,2,3];
function num(a){
    a.push(4)
}
num(a);
console.log(a); // [1,2,3,4]

function t(greet){
    console.log(greet)
    function greet(){  // 函数声明
        alert('greet')
    }
}
t(3) // function grret(){alert('greet')}

function t(greet){
    console.log(greet)
    var greet = function (){  // 函数表达式
        alert('greet')
    }
    console.log(greet)
}
t(3) // 3 ---- function grret(){alert('greet')}

function a(b){
    console.log(b)
    function b(){
        console.log(b)
    }
    b()
}
a(3) // [Function: b] [Function: b]

function a(b){
    console.log(b)
    var b = function(){
        console.log(b)
    }
    b()
}
a(3) // 3 [Function: b]