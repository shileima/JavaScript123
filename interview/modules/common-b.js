/*
 * @Author: your name
 * @Date: 2021-03-18 14:42:35
 * @LastEditTime: 2021-03-18 14:42:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /JavaScript123/interview/modules/common-b.js
 */
// ModuleB
const { obj, b } = require('./common-a');
console.log(`a: ${obj.a}`);
console.log(`b: ${b}`);
setTimeout(() => {
  console.log(`a: ${obj.a}`);
  console.log(`b: ${b}`);
}, 100);

// result
// a: 1
// b: 1
// a: 2
// b: 1