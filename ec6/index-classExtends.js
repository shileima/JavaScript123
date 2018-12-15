// es5继承方式
function Parent(){
    this.name = "123"
}
function Child(){}
// 子函数的prototy等于父函数的一个实例实现继承
// 这样的劣势在于：1、子函数同样继承了父函数的私有属性
// 2、子类的构造函数也是父类Parent 如下：

/*Child.prototype = new Parent();
console.log(Child.prototype.constructor);
Child.prototype.constructor = Child;*/

// 第二种继承不会继承了父函数的私有属性
// Object.create 返回一个具有指定的内部原型且包含指定的属性（如果有）的新对象
Child.prototype = Object.create(Parent.prototype,{
    constructor: {
        value: Child,
        enumberable: false,
        writable: true,
        configurable: true
    }
})
var p1 = new Child();
console.log(p1.name);
console.log(p1.constructor); // Child