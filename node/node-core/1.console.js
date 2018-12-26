console.log(1)
console.info(2)

console.warn(3)
console.error(4)

/* node console.js 1> console.log //标准输出，不输出错误 1，2 */
/* node console.js 2> err.log //错误输出，不输出标准 1，2 */
/* node console.js > console.log 2>&1 将错误输出导入到标准输出 1，2，3，4 */

// 断言
function add(a,b){
    return a+b
}
console.assert(add(1,2)==4,'错误！');

console.dir(global.process.cwd());

