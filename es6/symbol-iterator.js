/*
 * @Description: 
 * @Date: 2020-12-14 17:47:24
 * @LastEditors: mashilei@meituan.com
 * @LastEditTime: 2021-01-19 20:26:38
 * @FilePath: /JavaScript123/es6/symbol-iterator.js
 */

const arr = [4, 5, 6, 7, 8, 9, 12, 12, 13];
const arr2 = [];

arr2[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
}

console.log(arr2[Symbol.iterator])
console.log(Object.getOwnPropertySymbols(arr2))
console.log(...arr2);

for (let v of arr2) {
    console.log(v);
}

console.log('--------------------------')
// 定义一个尽在奇数索引地方生产值
const arr3 = [4, 5, 6, 7, 8, 9, 12, 12, 13];
arr3[Symbol.iterator] = function* () {
    //console.table(this);
    for (var i = 1; i < arr3.length; i++) {
        if (i < this.length) {
            yield this[i];
            i++
        }
    }
};

for (const v of arr3) {
    console.log(v);
}

console.log('--------------------------')
const arr4 = [4, 5, 6, 7, 8, 9, 12, 12, 13];
//定义一个尽在奇数索引地方生产值
arr4[Symbol.iterator] = function* () {
    let idx = 1;
    //console.table(this);
    do {
        yield this[idx];
    } while ((idx += 2) < this.length)
};
for (const v of arr4) {
    console.log(v);
}

console.log('--------------------------')
class Emitter {
    constructor(max) {
        this.max = max;
        this.idx = 0;
    }
    *[Symbol.iterator]() {
        while (this.idx < this.max) {
            yield this.idx++;
        }
    }
}
const count = new Emitter(5);
for (const x of count) {
    console.log(x);
}

// Symbol.match
RegExp.prototype[Symbol.match] = function (str) {
    console.log(str);
    // return 123;
}
// console.log(RegExp.prototype[Symbol.match]);
console.log('foobar'.match(/bar/))

// 自定义match函数
class StringMatcher {
    constructor(str) {
        this.str = str;
    }
    [Symbol.match](target) {
        return target.includes(this.str)
    }
}
console.log('foobar'.match(new StringMatcher('foo')));
console.log('barbaz'.match(new StringMatcher('qux')));

// symbol.replacement
class StringReplacer {
    constructor(str) {
        this.str = str;
    }
    [Symbol.replace](target, replacement) {
        return target.split(this.str).join(replacement);
    }
}
console.log('barfoobaz'.replace(new StringReplacer('foo'), 'qux'));

// symbol.search
class StringSearcher {
    constructor(str) {
        this.str = str
    }
    [Symbol.search](target) {
        return target.indexOf(this.str)
    }
}
console.log('foobar'.search(new StringSearcher('foo')))
console.log('barfoo'.search(new StringSearcher('foo')));
console.log('barbaz'.search(new StringSearcher('qux'))); // -1

// Symbole.species 一个函数值，该函数返回值作为创建派生对象的构造函数
class Bar extends Array { }
class Baz extends Array {
    static get [Symbol.species]() {
        return Array;
    }
}
let bar = new Bar(); console.log(bar instanceof Array); console.log(bar instanceof Bar); bar = bar.concat('bar'); console.log(bar instanceof Array); console.log(bar instanceof Bar);
let baz = new Baz(); console.log(baz instanceof Array); console.log(baz instanceof Baz); baz = baz.concat('baz'); console.log(baz instanceof Array); console.log(baz instanceof Baz);

// Symbol.toPrimitive
class Foo { }
let foo = new Foo();
console.log(3 + foo); console.log(3 - foo); console.log(String(foo));

class Bar {
    constructor() {
        this[Symbol.toPrimitive] = function (hint) {
            switch (hint) {
                case 'number':
                    return 2;
                case 'string':
                    return 'string bar';
                case 'default':
                default:
                    return 'default bar';
            }
        }
    }
}
let bar = new Bar();
console.log(3 + bar);
console.log(3 - bar);

let age = 29;
let anotherAge = --age + 2;
console.log(age);
console.log(anotherAge);


let num1 = 2;
let num2 = 20;
let num3 = num1-- + num2;
let num4 = num1 + num2;
console.log(num3, num4);

let num1 = 25; // 二进制00000000000000000000000000011001 
let num2 = ~num1; // 二进制11111111111111111111111111100110 
console.log(num2); // -26

console.log(1 + { a: 10 });
console.log(true + 1);
