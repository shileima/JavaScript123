let buf7 = Buffer.alloc(6,1);
let buf8 = buf7.slice(2, 6);

console.log(buf8);
buf8.fill(4)
// slice 是浅拷贝，会改变原来buffer内的值
console.log(buf7);
console.log(buf8);

let buf9 = Buffer.from('珠峰培训')
let buf10 = buf9.slice(0,5)
let buf11 = buf9.slice(5)
/* 一个汉字需要三个字节，如果slice前5个则最后汉字不完整 */
console.log(buf10.toString());//珠�
console.log(buf11.toString());//�培训