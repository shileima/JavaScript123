// 发布订阅
class EventEmit {
  constructor() {
    this._events = {};
  }
  on(eventName, callback) {
    let callbacks = this._events[eventName] || [];
    callbacks.push(callback);
    this._events[eventName] = callbacks;
    return this;
  }
  off(eventName, callback) {
    let callbacks = this._events[eventName] || [];
    let i = callbacks.indexOf(callback);
    if (i >= 0) callbacks.splice(i, 1);
    this._events[eventName] = callbacks;
    return this;
  }
  emit(eventName){
    let callbacks = this._events[eventName] || [];
    callbacks.forEach(fn=>fn())
    return this;
  }
}

const makeMoneyOne = () => {console.log('make money 1')}
const makeMoneyTwo = () => {console.log('make money 2')}
const makeMoneyThree = () => {console.log('make money 3')}

const emitor = new EventEmit();
emitor.on('makeMoney', makeMoneyOne)
emitor.on('makeMoney', makeMoneyThree)
emitor.on('makeMoney', makeMoneyTwo).off('makeMoney', makeMoneyOne)

emitor.emit('makeMoney')

// 观察者模式
class Subject {
    constructor(){
        this.status = 'happy';
        this.operator = [];
    }
    attach(o){
        this.operator.push(o)
    }
    setState(newStatus){
        this.status = newStatus;
        this.operator.forEach(o => o.emit(this.status))
    }
}
class Observer {
    constructor(name){
        this.name = name;
    }
    emit(status){
        console.log(`${this.name}, Child's status is ${status}`)
    }
}
const baba = new Observer('Daddy');
const mama = new Observer('Mammy')
const baby = new Subject();
baby.attach(baba);
baby.attach(mama);
baby.setState('crying')

// 不用循环和数组原生方法，遍历一个数组
let index = 0;
function loopArr(arr,cb){
    if(index < arr.length){
        cb(arr[index++])
        loopArr(arr,cb)
    }

}
const arr1 = [1,2,3,4,5];
loopArr(arr1, (item) => {console.log(item)})

// 隐式转换 null 和 undefined 比较时不能被转成其他类型 null == undefined
console.log(null == 0) // false
console.log(null > 0); // false
console.log(null < 0); // false
console.log(null <= 0); // 因为 null > 0 为false 所以 <= 为 true
console.log(null >= 0); // 因为 null < 0 为false 所以 >= 为 true

// Array(), Array.of(), Array.from() 区别
// Array.from 是将带有length的 arrayLike 对象和可迭代对象转成数组
console.log(Array(7)) // [ <7 empty items> ]
console.log(Array.of(7)) // [ 7 ]
console.log(Array.from({0:undefined, length: 5}, (item,i) => i)) // [ 0, 1, 2, 3, 4 ]

// Array.prototype.keys 和 Array.prototype.values 返回 Array Iterator
const arr2 = ['a','b','c'];
console.log(arr2[Symbol.iterator]);
const iterator2_keys = arr2.keys(); 
const iterator2_values = arr2.values();
const iterator2_entries = arr2.entries();
console.log(iterator2_keys.next().value); // 0
console.log(iterator2_values.next().value); // a
console.log(iterator2_entries.next().value); // [ 0, 'a' ]
// ES6循环 for in / for of / forEach / map
// Tips of Arrow Function
var name = 'global';
const obj1 = {
    name: '1-1',
    func: () => {
        console.log(this)
        console.log(this.name)
    }
}
const obj2 = {
    name: '1-1',
    func: () => {
        console.log(this.name)
    }
}
obj1.func()