/*let {a:b} = {a:1};
console.log(b) // 1
console.log(a)  // error*/


/*let {a,b}={b:1,a:2}
console.log(a,b) // 2 , 1 完全可以对应打印出来
*/
/*
let [a,b,c,d] = '1224'

console.log(a,b,c,d) // 1,2,3,4 字符串是会被转化成 数组对象的*/

/*let {length:len} ='miaov';

console.log(len) // 5
console.log(length)	// 0*/

/*let {toString:ts} = 1;
/*let {toString:bs} = true;

console.log(ts===Number.prototype.toString) // true
console.log(bs===Boolean.prototype.toString) // true
console.log(ts) // function toString()*/

// let {a} = null // error*/
// let {b} = undefined // error

/*var data1={a:1}, data2 = {b:2}, obj= {}

obj[data1] = 1
obj[data2] = 2

console.log(obj) // Object {[object Object]: 2} 当浏览器发现 obj 的 key 值是个对象的时候，默认将对象转换成了字符串

console.log(data1.toString()===data2.toString()) // true
console.log(data1)*/

// Map 数据结构


const map = new Map([

//  ['a',1],['b',2]

]);
/*
map.set('miaov','ketang').set('石磊','loading').set("a",5)

console.log(map.keys())

map.forEach(function(key, value, map){
	
	console.log(key)
	// 打印结果：
				/*	 5:a
					 2:b
					 ketang:miaov
					 loading:石磊
					
	
	})*/

// 在 Map 里 NaN 被认为是一个键值，

/*map.set(NaN,123).set(NaN,1000)
console.log(map) // Map(1) {NaN => 1000}*/

console.log({}==={}) // false 对象比较的是他们的内存地址，不是值

map.set({},'a').set({},'b')

console.log(map) // Map(2) {Object {} => "a", Object {} => "b"}

//map 里面 key 的排列顺序是按照添加顺序排列的

// 1，利用 set 的不可重复性进行数组去重
// 2,使用扩展运算符去重 ...

var arr=[1,3,3,4,5,2,2,[],23]

var s = new Set(arr)

var arr2 = []

s.forEach(function(key,value,set){
	arr2.push(value)	
	})

 //console.log(arr2) // 得到新数组 arr2 [1,3,4,5,2]
 
 console.log([...new Set(arr)])
 
 
 
 // 凡是具备 iterater 属性的 数据都可以解构赋值
 
/* const set = new Set(['a','b','c'])
 
 const [x,y,m,n] = set;
 
 console.log(x,y,m,n)*/
  
  
  // 扩展运算符 ...


/*let str = 'miaov';

let arrList = [...str]
console.log(arrList)
 */
 
/* const arr3 = [1,2,3,4,5]
 
 for(i of arr3){
	 console.log(i)
	 
	 }
*/
const m = new Map()

m.set('a',1).set('b',2).set('c',3)

console.log(m)


for([key,value] of m){
	
console.log(key,value)	
}






