/* Object.create(null) 创建的对象是一个空对象，在该对象上没有继承 
Object.prototype 原型链上的属性或者方法,例如：toString(), hasOwnProperty()等方法

Object.create()方法接受两个参数:Object.create(obj,propertiesObject) ;

obj:一个对象，应该是新创建的对象的原型。

propertiesObject：可选。该参数对象是一组属性与值，该对象的属性名称将是新创建的对象的属性名称，
值是属性描述符（这些属性描述符的结构与Object.defineProperties()的第二个参数一样）。
注意：该参数对象不能是 undefined，
另外只有该对象中自身拥有的可枚举的属性才有效，也就是说该对象的原型链上属性是无效的。
 */

var obj = Object.create(Object.prototype,{
    x: {
        value: "12",
        enumerable: true
    }, 
    y: {
        value: "45",
        enumerable: true
    }})
console.log(obj.__proto__.constructor) // [Function: Object]