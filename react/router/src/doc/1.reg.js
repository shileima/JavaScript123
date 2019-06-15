let pathToRegexp = require('path-to-regexp');
let regexp = pathToRegexp('/home',[],{end:false})
console.log(regexp)

let path = '/home////';
let result = path.match(regexp)
console.log(result)
