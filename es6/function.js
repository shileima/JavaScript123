/* ES6 将块级函数标准化，
 * 如果非严格模式下，块级函数将被提升至全局作用域 
 * 如果严格模式下，只在块级内部作用域
 */

//"use strict";

if(true){
  console.log(dosth) // [Function: dosth]

  function dosth(){

  }
  dosth()
}

console.log(dosth) // 严格模式下，dosth is not defined