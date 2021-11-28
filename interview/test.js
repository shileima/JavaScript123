/*
 * @Author: your name
 * @Date: 2021-02-25 19:09:54
 * @LastEditTime: 2021-04-02 20:10:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /JavaScript123/interview/test.js
 */
Promise.resolve().then(() => {
    console.log(0);
    return Promise.resolve(4);
}).then((res) => {
    console.log(res)
})

Promise.resolve().then(() => {
    console.log(1);
})

for (let i = 1; i <= 10; i++) {
    //封装一个函数 执行异步操作
    (function (i) {
        setTimeout(function () {
            console.log(i)
        }, 1000 * i)
    })(i)
}

function print(n,cur=1){
    if(cur<=n){
        console.log(cur)
        setTimeout(()=>{
            print(n,cur+1)
        },1000)
    }
}

print(10)

function quickSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    let pos = Math.floor(arr.length/2);
    let mid = arr.splice(pos,1);
    let left = [],
        right = [];
    for (let i=0; i<arr.length; i++) {
        if (arr[i] <= mid) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat(mid,quickSort(right));
}

let arr = [33,1,5,6,5,12,23];
console.log(quickSort(arr));


let p1 = await Promise.resolve(4);

let p2 = await Promise.resolve(5);

let p3 = await Promise.resolve(6);

const promiseArr = [p1,p2,p3];
console.log(promiseArr);

for (i of promiseArr){
    console.log(i);
}

