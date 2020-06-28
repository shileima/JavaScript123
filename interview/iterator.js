// 可迭代对象
const b = [1,2]
const it_b = b[Symbol.iterator]() // 可迭代对象内置Symbol.iterator
console.log(it_b.next()); // { value: 1, done: false }
console.log(it_b.next()); // { value: 2, done: false }
console.log(it_b.next()); // { value: undefined, done: true }

const iter = makeIterator(b);
console.log(iter);

console.log(iter.next()); // ["x", 10]
console.log(iter.next()); // ["y", 20]
console.log(iter.next()); // throws StopIteration

// 实现 symbol.iterator
function makeIterator(array) {
    var nextIndex = 0;
    return {
        next: function () {
            return nextIndex < array.length ?
                { value: array[nextIndex++], done: false } :
                { value: undefined, done: true };
        }
    };
}

// 改造既有对象
let range = {
    from: 1,
    to: 5
}

    // 1. for..of 循环首先会调用对象上的 [Symbol.iterator] 属性——range[Symbol.iterator]()，
    // 属性 range[Symbol.iterator] 称为“迭代对象生成器”或“迭代对象生成函数”
range[Symbol.iterator] = function () {
    // 调用 range[Symbol.iterator]()，会返回一个包含 next 方法的对象，
    // 这个对象称为“迭代对象”
    // 2. 接下来, for..of 就是完全在跟这个迭代对象打交道了
    return {
        current: this.from,
        last: this.to,
        // 3. 每次 for..of 循环一次，就要调用一次 next 方法
        next() {
            // 4. 从 next 方法返回的对象中，我们能获得当前遍历的值（value）以及遍历是否结束的标记（done）
            if (this.current <= this.last) {
                return { done: false, value: this.current++ }
            } else {
                return { done: true }
            }
        }
    }
}
console.log([...range]);

for (let num of range) { console.log(num, 'let...of...') };

// let of 的本质
let iterator = range[Symbol.iterator]();
while (true) {
    let result = iterator.next();
    // 标记结束（done 为 true），就终止循环，结束遍历
    if (result.done) break;
    // 否则，打印当前遍历的值
    console.log(result.value, 'while');
}

// 默认迭代器对象
// Map 对象默认的迭代对象生成器函数是 map.entries()
// Set、Array 对象默认的迭代对象生成器函数是 map.values()