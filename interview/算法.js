// Array.from
console.log(Array.from({ length: 5 }, (v, i) => i));

// flatten
let flatten = eval(`[${[1, [2, 3], [4]] + ''}]`)
console.log(Array.isArray(flatten), flatten)

// 迭代器的遍历
const s = new Set([1, 2, 3, 4, 5])
const it = s.values() // values方法可以返回Set对象值的遍历器对象
console.log(it);
/* 第一种 */
let val = null;
while (!(val = it.next()).done) {
    console.log(val);
}
/* 第二种 */
const it1 = s.values()
console.log([...it1])

/* 第三种 */
const it2 = s.values()
for (const val of it2) {
    console.log(val)
}
/* 第四种 */
console.log('------------');
const it3 = s.values()
const arr = Array.from(Array(5), it3.next, it3).map(x => x.value)
console.log(arr)

/* 生成器构造无穷斐波那契数列 */
function* fibonacci () {
    let a = 1, b = 1;
    yield a; yield b;
    while (true) {
        const t = b
        b = a + b; a = t;
        yield b;
    }
}
const it = fibonacci()
/* console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next()) */
const feb10 = Array.from(Array(10), it.next, it).map(x => x.value)
console.log(feb10);

/* 递归斐波拉契数列,求第 n 项，你从 1 开始  */
function fibonacci (n) {
    return (n == 1 || n == 2) ? 1 : fibonacci(n - 1) + fibonacci(n - 2)
}
console.log(fibonacci(5));

/* 斐波那契数列求和,求第 n 项, n 从 0 开始 */
function fibonacci (n) {
    let [a, b] = [0, 1];
    for (let i = 0; i < n; i++) {
        [a, b] = [b, a + b]
    }
    return b;
}
console.log(fibonacci(1));


/* 数组展平的生成器实现 */
function* flatten (arr) {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            yield* flatten(arr[i])
        } else {
            yield arr[i]
        }
    }
}
console.log(flatten([1, [2, 3], [4]])); // Object [Generator] {}
console.log([...flatten([1, [2, 3], [4]])]);

/* /async await 实际上是由 generator + yield 控制流程 + promise 实现回调
每秒打印数据 */
function sleep (ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}
(async function test () {
    for (let i = 0; i < 10; i++) {
        await sleep(1000);
        console.log(i)
    }
})()

/* 原理 */
function _asyncToGenerator (fn) {
    return function () {
        var gen = fn.apply(this, arguments);
        return new Promise(function (resolve, reject) {
            function step (key, arg) {
                try {
                    var info = gen[key](arg);
                    var value = info.value;
                } catch (error) {
                    reject(error);
                    return;
                }
                if (info.done) {
                    resolve(value);
                } else {
                    return Promise.resolve(value).then(function (value) {
                        return step("next", value);
                    },
                        function (err) {
                            return step("throw", err);
                        });
                }
            }
            return step("next");
        });
    };
}
function sleep (ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}
let test = function () {
    var ref = _asyncToGenerator(function* () {
        for (let i = 0; i < 10; i++) {
            yield sleep(100);
            console.log(i)
        }
    });

    return function test () {
        return ref.apply(this, arguments);
    };
}();

/* 中文排序，浏览器内生效 */
const localArray = ['王程程', '王刚', '蒋雪', '李明']
console.log(localArray.sort((a, b) => a.localeCompare(b, 'zh')));

/* 插入排序 */

function sort (a) {
    a = [...a]
    for (let i = 1; i < a.length; i++) {
        let card = a[i];
        let j = i
        while (j > 0 && card < a[j - 1]) {
            a[j] = a[j - 1]
            j--
        }
        a[j] = card
    }
    return a
}
const arr = [2, 6, 3, 26, 9, 87,]
console.log(sort(arr))
console.log(arr)