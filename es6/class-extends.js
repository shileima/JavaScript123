class Animal {
    constructor(type) {
        this.type = type
    }
    // a = 10  // ES6 还未支持的语法
    eat() {
        return "eating"
    }
    static say() {
        console.log('say hello')
    }
}

class Cat extends Animal {
    constructor(type) {
        super(type)
        console.log(super.eat())
    }
    /* 一个方法前， 加上static关键字， 就表示该方法不会被实例继承， 
    而是直接通过类来调用，实例不能使用 这就称为“ 静态方法”。 */
    static flag() {
        // super如果在static 或 constructor中，super 代表父类
        console.log('static:')
        console.log(super.prototype.eat())
        return "static flag"
    }
    run() {
        // super如果在原型方法中，super 代表父类的原型
        console.log('run')
        console.log(super.eat())
        return "run function"
    }
}

const cat = new Cat('大猫');
Cat.say() // static 关键字 可以被类继承，不能被实例继承
console.log(cat.type)
cat.eat()
console.log(Cat.flag())
console.log(cat.run())
// console.log(cat.flag()) // cat.flag is not a function

