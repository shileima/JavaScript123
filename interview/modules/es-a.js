/*
 * @Author: your name
 * @Date: 2021-03-18 14:44:01
 * @LastEditTime: 2021-03-18 14:44:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /JavaScript123/interview/modules/es-a.js
 */
// ESM
// moduleA
const obj = {
    a: 1
  }
  let b = 1
  setTimeout(() => {
    obj.a++
    b++
  });
  export { obj, b }