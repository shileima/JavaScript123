let arr1 = [34, 56, 90, 12, 23, 40]
let arr2 = arr1.filter(item => item > 40)
console.log(arr2);

// filter实现原理
Array.prototype.filter2 = function (fn) {
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
        let flag = fn(this[i])
        flag && newArr.push(this[i])
    };
    return newArr;
};

let arr3 = arr1.filter2(item => item > 40);
console.log(arr3);
console.log('----------');

let str = "Hello Shuidi";

let rs = [].filter.call(str, (item, index) => index > 5)
console.log(rs);
console.log('-------');
console.log(rs);
console.log(rs.slice(1));
console.log(rs);
console.log(rs.splice(2, 1, "add"));
console.log(rs);
console.log(rs.join('-'));