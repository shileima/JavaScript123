/* extends 实现 */
class Animal {
    static onlyClass() {
        return 'only class';
    }
    constructor(name) {
        this.type = '哺乳类'
        this.name = name
    }
    eat() {
        return ('eatting');
    }
}
@log
class Cat extends Animal {
    static a = 2
    @readyonly P = 3.14
    @before static say() {
        console.log('hello')
    }
}
function log(target) {
    console.log(target)
}
function readyonly(target, key, descriptor) {
    descriptor.writable = false

}
function before(target, key, descriptor) {
    let oldSay = descriptor.value;
    console.log('before')
    oldSay()
}

/* class Cat { }
Cat.prototype = Object.create(Animal.prototype, {
    constructor: {
        value: Cat,
        writable: true,
        configurable: true
    }
})
Object.setPrototypeOf(Cat, Animal) */

let c1 = new Cat('1号猫')
console.log(c1 instanceof Animal);

console.log(c1.type);
console.log(Cat.onlyClass());
console.log(c1.eat());
// c1.P = 3.15 // readOnly 不允许修改
console.log(c1.P);
console.log(Cat.a)


