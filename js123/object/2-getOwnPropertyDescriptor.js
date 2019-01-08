var obj={get foo(){return 123;}};
	console.log(Object.getOwnPropertyDescriptor(obj,'foo'));
	
	obj={
		name:'king',
		age:12
	};
	console.log(Object.getOwnPropertyDescriptor(obj,'name'));

	obj={};
	Object.defineProperty(obj,'test',{
		value:'this is a test',
		writable:false,
		enumerable:false,
		configurable:true
	});
	console.log(Object.getOwnPropertyDescriptor(obj,'test'));

	/* getOwnPropertyDescriptor 是存在于自身上的属性，
	通过_proto_继承过来的属性会返回undefined */
	var obj1={x:1};
	var obj2=Object.create(obj1);
	obj2.y = "Y"
	console.log(obj2.prototype);
	
	console.log(obj2.__proto__.x === 1); // true
	
	console.log(Object.getOwnPropertyDescriptor(obj2,'x'));
	console.log(Object.getOwnPropertyDescriptor(obj2,'y'));

	console.log(Object.getPrototypeOf(obj2)==obj1);
	console.log(obj2.__proto__ === obj1); // true
	
	
	//constructor
	var obj3=new Object;
	console.log(obj3.constructor==Object);
	var arr1=new Array;
	console.log(arr1.constructor==Array);
	var n=new Number(324);
	console.log(n.constructor==Number);
	function Test(){
		console.log("Test");
	}
	var f=new Test();
	console.log(f.__proto__);
	console.log(Test.prototype);
	
	console.log(f.constructor);
	console.log(f.toString());
	Test.prototype.toString=function(){
		return '这是自定义的toString方法';
	}
	console.log(f.toString());
	var toString=Object.prototype.toString;
	console.log(toString.call(new Date));
	console.log(toString.call(new String));
	console.log(toString.call(Math));
	console.log(toString.call(undefined));
	console.log(toString.call(null));
	
	var obj={x:1};
	console.log(obj.valueOf());