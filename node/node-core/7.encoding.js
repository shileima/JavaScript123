/*
* 1、把Unicode 转 utf8 转码方法
* 2、utf-8是Unicode的一种存储方式，并不是8进制，而是每次以8个位为单位传输数据
* 3、UTF-8 最大的一个特点，就是它是一种变长的编码方式
*
* 4、Unicode 一个中文字符占 2 个字节，而 UTF-8 一个中文字符占 3 个字节
* 就是要中文转成UTF8的16进制字符串进行存储，
* 就比如“丁一万”这样的要转成E4 B8 80/E4 B8 81/E4 B8 87
*
* 5、UTF-8 是 Unicode 的实现方式之一
* 6，"万" 的Unicode 是 4E07
* 7、
* */

function transfer(number) {
    let arr = ["1110","10","10"]
    let str = number.toString(2)
    arr[2] += str.substring(str.length-6)
    arr[1] += str.substring(str.length-12,str.length-6)
    arr[0] += str.substring(0,str.length-12).padStart(4,"0")
    // arr = [ '11100100', '10111000', '10000111' ]
    return arr.map(item=>parseInt(item,2).toString(16)).join('')

}

console.log(Buffer.from('磊')); // Unicode 是 78CA

console.log(0x4e07.toString(2)); // 简写
console.log(parseInt('00004e07',16).toString(2)); // 完整写法
// 100 111000 000111

console.log(transfer(0x78CA));

/* 汉字区间十六进制 0000 0800-0000 FFFF
*  十进制就是： 2048 到 65535 */