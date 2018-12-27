/* require 是同步加载的，因为存在 require.cache
* 可以缓存起来,相同地址文件不会重复加载；
* 缓存的key值是绝对路径，相同的文件地址引用，缓存可以共用；
*/

var school = require('./college')
console.log(Object.keys(require));
// [ 'resolve', 'main', 'extensions', 'cache' ]

/* resolve: 只想知道模块的绝对路径，而不加载
* C:\Users\Loading\test\node\node-core\module\college.js
* */
console.log(require.resolve('./college'));

/* main 入口模块，就是当前的文件的模块信息 */
//console.log(require.main);

let user = require('./user')
console.log("user.name=>",user.name);