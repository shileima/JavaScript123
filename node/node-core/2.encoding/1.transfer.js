/*
* 如何实现进制转换
* */

let a = 0b10100;
console.log(a);
let b = 0o24;
console.log(b);
let c = 0x14;
console.log(c);

// 任意进制转成二进制
console.log(parseInt('10100',16));

let d = 20;
console.log(d.toString(8));  // 24
console.log(d.toString(16)); // 14

