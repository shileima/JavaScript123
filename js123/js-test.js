/*1、词法作用域*/
var teacher = "xiaoxiang";
function ask(question){
  console.log(teacher,question);
}
function other(){
  var teacher = "loading";
  ask("who");
}
other()

/* xiaoxiang who
  解析：(1) javascript 运行是分为两个步骤,先编译后执行；
  (2) 编译会根据所有正式声明生成词法作用域，
  正式声明包括标识符（var、let），函数参数；
  (3) 运行时会根据词法作用域引用变量；
  一句话：函数中变量实在定义时决定的，不是在运行时。*/

/* 2、词法作用域 */
var teacher = "xiaoxiang";
function otherClass(teacher){
  console.log(teacher)
   if(typeof teacher === 'undefined'){
     console.log(teacher)
     let teacher = "loading" 
   }else {
      console.log(teacher);
   }
}
otherClass()

/* undefined  ReferenceError: teacher is not defined */
/* 解析：(1) otherClass函数参数teacher在函数定义时，会被解析为
   var teacher = undefined;并放入函数体内;
   (2) 块级作用域变量只作用于{}中，不允许未声明就使用,否则报错。 */

/* 3、函数声明和函数表达式 */
function fn(){
  return print()
  function print(){
    console.log('1')
  }
}
let fn2 = function fn(){
  console.log(fn)
  return print2()
  var print2 = function(){
    console.log('2')
  }
}
fn()
fn2()

/* 1、[Function: fn]、TypeError: print2 is not a function */
/* 解析：(1)、函数声明会加入变量放入临近的作用域中，而函数表达式会将变量放入自己的作用域中 
   (2)、函数声明的变量提升是可以直接调用函数的，而print2变量提升此时被初始化为undefined */

/* 4、闭包 */
for(let i=1;i<=3;i++){
  setTimeout(function(){
    console.log(i)
  }, i*1000)
}
/* setTimeout 是异步代码;i是函数内全局变量,等同步代码执行完(此时i=4)才去执行异步; */
for(var i=1;i<=3;i++){
  setTimeout(function(){
    console.log(i)
  }, i*1000)
}
for(var i=1;i<=3;i++){
  (function(i){
    console.log(i)
  })(i)
}
for(var i=1;i<=3;i++){
  (function(i){
    setTimeout(function(){
      console.log(i)
    },i*1000)
  })(i)
}
for(var i=1;i<=3;i++){
  (function(i){
    setTimeout(function(i){
      console.log(i) 
    },i*1000)
  })(i)
}









