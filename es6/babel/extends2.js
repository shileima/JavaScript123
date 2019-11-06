/* class Animal {
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
} */

function Animal(name) {
    this.name = name
    this.type = "哺乳类"
}
Animal.prototype.eat = function () {
    return ('eatting');
}
Animal.a = 10;
// class Cat { }
function Cat(name) {
    Animal.call(this, name)
}

// Cat.prototype = Animal.prototype
Object.setPrototypeOf(Cat.prototype, Animal.prototype);
Object.setPrototypeOf(Cat, Animal);
/* Cat.prototype = Object.create(Animal.prototype, {
    constructor: {
        value: Cat
    }
}) */

let c = new Cat('喵1')

// console.log(Cat.onlyClass());
console.log(c.name)
console.log(c.type)
console.log(c.eat());
console.log(Cat.a)
console.log(c instanceof Cat)
