// setPrototypeOf
let obj1 = {age:1}
let obj2 = {
    age:2,
    setName(){
        return "咖啡"
    }
}
let obj3 = {}

Object.setPrototypeOf(obj3,obj1)
// 相当于 obj3.__proto__ = obj1
console.log(obj3);
console.log(obj3.age);

// super 继承父类的属性和方法
let obj4 = {
    __proto__:obj2,
    setName(){
        return "牛奶" + super.setName() + super.age; // 牛奶咖啡2
    }
}

console.log(obj4.setName());