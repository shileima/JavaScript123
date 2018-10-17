// 一个函数返回一个函数
// 判断类型 
// typeof instanceof constructor 
// Object.prototype.toString.call

function isType(type) { // [object String]
  return function (content) {
      let t = Object.prototype.toString
          .call(content).replace(/\[object\s|\]/g, '');
      return t === type
  }
}
let types = ['String','Undefined','Function','Number'];
let util = {}; // util.isString isUndefined
types.forEach(t=>{
  util['is'+t] = isType(t);
});
console.log(util)
console.log(util.isString('hello'));
console.log(util.isString({a: 123}));

// 生成的 util 是什么样子
// { isString: 'function (content) {\r\n      let t = Object.prototype.toString\r\n          .call(content).replace(/\\[object\\s|\\]/g, \'\');\r\n      return t === type\r\n  }',
//   isUndefined: 'function (content) {\r\n      let t = Object.prototype.toString\r\n          .call(content).replace(/\\[object\\s|\\]/g, \'\');\r\n      return t === type\r\n  }',
//   isFunction: 'function (content) {\r\n      let t = Object.prototype.toString\r\n          .call(content).replace(/\\[object\\s|\\]/g, \'\');\r\n      return t === type\r\n  }',
//   isNumber: 'function (content) {\r\n      let t = Object.prototype.toString\r\n          .call(content).replace(/\\[object\\s|\\]/g, \'\');\r\n      return t === type\r\n  }' }




