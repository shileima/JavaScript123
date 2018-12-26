/* require 是同步加载的，因为存在 require.cache
* 可以缓存起来,相同地址文件不会重复加载；
* 缓存的key值是绝对路径，相同的文件地址引用，缓存可以共用；
*/

//console.log(3,module);
console.log(Object.keys(require.cache));
var school = require('./college')
console.log(Object.keys(require.cache));
var school = require('./college')
console.log(Object.keys(require.cache));

console.log(Object.keys(require));
// [ 'resolve', 'main', 'extensions', 'cache' ]

console.log('require:',require.toString());
//console.log(school);
console.log(4,module.loaded);

/* 等当前代码块全部执行完才会loaded == true 不包括回调 */
setTimeout(() => {
    console.log(5,module.loaded);
},1000)

/* module.paths */
console.log("module.paths => ",module.paths);