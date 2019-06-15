let pathToRegexp = require('path-to-regexp');

let paramsNames = [];
let regexp = pathToRegexp('/user/:id/:name',paramsNames,{end:false})
//console.log(regexp)
paramsNames = paramsNames.map(item=>item.name);
//console.log(paramsNames)

let path = '/user/2/loading';
let result = path.match(regexp)
let [url,...values] = result;
console.log(result)
let params = {}
for(let i=0;i<paramsNames.length;i++){
  params[paramsNames[i]] = values[i]
}
console.log(params); // { id: '2', name: 'loading' }

