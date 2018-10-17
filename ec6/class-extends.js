class Animal {
    constructor(type){
        this.type = type
    }
    eat(){
        console.log('eating')
    }
    static say(){
	console.log('say hello')
    } 
}

class Cat extends Animal {
    constructor(type){
        super(type)
    }
    /* 一个方法前， 加上static关键字， 就表示该方法不会被实例继承， 
    而是直接通过类来调用，实例不能使用 这就称为“ 静态方法”。 */
    static flag(){
        return "static flag" 
    }
}

const cat = new Cat('大猫');
Cat.say() // static 关键字 可以被类继承，不能被实例继承
console.log(cat.type)
cat.eat()
console.log(cat.flag()) // cat.flag is not a function
