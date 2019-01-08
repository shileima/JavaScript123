var n=Number('123.123');
console.log(n);
console.log(typeof n);
var n=new Number('123.123');
console.log(n);
console.log(typeof n);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.NaN);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.isNaN(NaN));
console.log(Number.isNaN(Number.NaN));
console.log(Number.isNaN(0/0));
console.log(Number.isNaN('NaN')); // 
console.log(Number.isNaN(''));
console.log(Number.isNaN('123'));
console.log(Number.isNaN(true));
console.log(Number.isNaN(undefined));
console.log(Number.isNaN(' '));
var n=12345.6789;
console.log(n.toFixed());
console.log(n.toFixed(1));
console.log(n.toFixed(2));
console.log(n.toFixed(6));
console.log(1.23e+20.toFixed(2));
console.log(1.23e-20.toFixed(2));
console.log(2.45.toFixed(1));

/* toExponential() 方法可把对象的值转换成指数计数法。 */
var n=77.1234;
console.log(n.toExponential());
console.log(n.toExponential(2));
console.log(n.toExponential(4));

/* toPrecision() 方法可在对象的值超出指定位数时将其转换为指数计数法。 */
var n=5.1234567;
console.log(n.toPrecision());
console.log(n.toPrecision(1));
console.log(n.toPrecision(2));
console.log(n.toPrecision(5));
console.log((1234.567).toPrecision(2));

var n=new Number(255);
console.log(n.toString());
console.log(n.toString(10));
console.log(n.toString(16));
console.log(n.toString(2));

//测试布尔对象
var b=new Boolean();
console.log(b); // 默认 false
console.log(typeof b);
console.log(b.valueOf());
console.log(typeof b.valueOf());

/* 0 null undefined ''  返回false */
/* 数字,字符串有值,true, 返回 true */
var b=new Boolean(0);
b=new Boolean(-0);console.log(b);
b=new Boolean(-1);console.log(b);
b=new Boolean(null);console.log(b);
b=new Boolean(false);console.log(b);
b=new Boolean(undefined);console.log(b);
b=new Boolean('');console.log(b);
b=new Boolean('false');
console.log(b);

var b=Boolean('test');
console.log(b);