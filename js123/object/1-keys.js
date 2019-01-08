var arr=['a','b','c'];
console.log(Object.keys(arr));
var obj={
	0:'d',
	1:'e',
	2:'f'
};
console.log(Object.keys(obj));
var obj1=Object.create({},{
	getFoo:{
		value:function(){
			return this.foo;
		},
		enumerable: false
	}
});
obj1.foo=123;
console.log('obj1:',obj1)
console.log(Object.keys(obj1));
//如果想获取一个对象的所有属性，
//包括不可枚举的，Object.getOwnPropertyNames()
console.log("获取对象的所有属性包括不可枚举的，Object.getOwnPropertyNames()");

console.log(Object.getOwnPropertyNames(arr));
console.log(Object.getOwnPropertyNames(obj));
console.log(Object.getOwnPropertyNames(obj1));