Promise.all = arr => {
    let aResult = [];    //用于存放每次执行后返回结果
    return new _Promise(function (resolve, reject) {
        let i = 0;
        next();    // 开始逐次执行数组中的函数(重要)
        function next() {
            arr[i].then(function (res) {
                aResult.push(res);    // 存储每次得到的结果
                i++;
                if (i == arr.length) {    // 如果函数数组中的函数都执行完，便resolve
                    resolve(aResult);
                } else {
                    next();
                }
            })
        }
    })
};

var obj = {}
console.log(obj.__proto__ === Object.prototype)

var func = function () { }

console.log(func.prototype.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null);

function A() { }
var a = new A();
console.log(a.__proto__ === A.prototype);

