// 1、最标准的继承实现
// Shape - 父类(superclass)
function Shape() {
    this.x = 0;
    this.y = 0;
    this.name = 'name'
}

// 父类的方法
Shape.prototype.move = function (x, y) {
    this.x += x;
    this.y += y;
    console.info('Shape moved.');
};

// Rectangle - 子类(subclass)
function Rectangle() {
    Shape.call(this); // 这里继承了私有属性 this.name
}

// 子类续承父类

// 这里继承了原型上的方法
Rectangle.prototype = Object.create(Shape.prototype);
// Rectangle.prototype = new Shape();
// console.log(Rectangle.prototype.constructor)
// 这里修复由于Object.create继承后 constructor 的指向
Rectangle.prototype.constructor = Rectangle;

var rect = new Rectangle();

console.log('Is rect an instance of Rectangle?',
    rect instanceof Rectangle); // true
console.log('Is rect an instance of Shape?',
    rect instanceof Shape); // true
rect.move(1, 1); // Outputs, 'Shape moved.'