class Circle {
    static PI = 3.14 // 实例上没有，类上有
    a = 10 // 实例上有，类上没有
}

let c = new Circle;

class Child extends Circle {
    constructor(){
        super()
    }
}
const child = new Child;

console.log('Circle.PI',Circle.PI)
console.log('Circle.a',Circle.a)

console.log('c.PI',c.PI) // 实例不能获取类上的属性
console.log('c.a',c.a)

console.log("Child.PI:",Child.PI)
console.log("Child.a",Child.a)

console.log('child.PI:',child.PI)
console.log('child.a:',child.a)