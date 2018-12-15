class Parent{
    constructor(name){
        // 实例的私有属性,只能被自身实例化的实例调用
        // 如果希望被子类继承,则需要调用super(name),这样子类实例化后可以调用this.name,
        this.name = name;
    }
    // 不带static关键字属于实例的公有属性,也就是原型上的属性,不能类调用，这是定于在Parent.prototype原型上的
    getName(){
        console.log(this.name)
    }
    // 带static关键字的静态属性属于类的属性，能被子类继承，不能被实例调用，这是定于在类上的
    static hello(){
        console.log('hello')
    }
}
class Child extends Parent{
    constructor(name,age){
        super(name)
        this.age = age
    }
}

var p1 = new Child('loading',23)
var p2 = new Parent('Parent');

Parent.hello()
//Parent.getName() //类有定义无static关键字就属于类的，不能被实例调用
//p2.hello()

console.log(p1.name)
p1.getName()

console.log(p1.age)
Child.hello()
//p1.hello() // 类有定义静态static关键字就属于类的，不能被实例调用

p2.getName()