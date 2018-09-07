// 箭头函数返回对象
Fn4 = (a,b) => ({a,b})
console.log(Fn4(5,9)) // Object {a: 5, b: 9}

// 箭头函数没有this指向，不能使用this
function foo () {
    setTimeout( () => {
        console.log("number:", this.number);
    },3000);
}
foo.call( { number: 42 } );  // number: 42

var a=11
function test1(){
    console.log(this)
  this.a=22;
  let b=function(){ console.log('ES5函数执行结果：',this.a) };
  b();
}
var x1 = new test1();// 11
// ES5中 this指向函数调用时的对象
// 当new出现时候，就是把函数作为构造函数进行调用

var m=11;
function test2(){
    console.log(this)
  this.m=22;
  let n=()=>{console.log('箭头函数执行结果：',this.m)}
  n();
}
var x2 = new test2(); // 22
// ES6中 this指向函数定义时的对象
// 函数内部是一个箭头函数的时候，
// 由于没有this指向，所以指向了外层函数的this 就是 test2()

const fn4 = (name,age) => ({name,age})
console.log(fn4('loading',23)) // {name: "loading", age: 23}

const fn5 = ({id,name}) => console.log(id,name)
fn5({id:12,name:"loading"}) // 12 "loading"