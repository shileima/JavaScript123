// 创建一个长度为 10、且用 0 填充的 Buffer。
const buf1 = Buffer.alloc(10);
console.log(buf1);
// 创建一个长度为 10、且用 0x1 填充的 Buffer。
const buf2 = Buffer.alloc(10, 17);
console.log(buf2);
// 创建一个长度为 10、且未初始化的 Buffer。
const buf3 = Buffer.allocUnsafe(10);
console.log('=============');
console.log(1,buf3);

// 第一个是填充值;第二个是填充开始位置;填充结束位置
buf3.fill(17,1,3)
console.log(2,buf3);

console.log('=============');

// write 方法至少需要3个字节的长度，否则无法写入成功
// 返回buffer实例的长度
let buf4 = Buffer.alloc(100)
let len = buf4.write('石磊', 0, 3)
buf4.write('磊',3,3)
console.log(len);
console.log(buf4.toString());

console.log('=============');
// writeInt8(16,1)
// 向指定的索引写入一个8位的整数,也就是占用一个字节整数
// buffer 永远输出16进制
let buf5 = Buffer.alloc(6)
buf5.writeInt8(0,0)
buf5.writeInt8(16,1)
buf5.writeInt8(20,2)
buf5.writeInt8(127,3)
//buf5.writeInt8(256,4)
// The value of "value" is out of range. It must be >= -128 and <= 127. 能写入最大一个字节就是 7f (127的16进制)
console.log(buf5); // <0, 10, 14, 7f, ?>

console.log('=============');
// writeInt16BE(16,1)
// 向指定的索引写入一个16位的整数,也就是占用一个字节整数
// BE big endian 高位在前
// LE little endian 低位在前
let buf6 = Buffer.alloc(4)
buf6.writeInt16BE(256,0)
console.log(buf6); //0x0100 <Buffer 01 00 00 00>
console.log('readInt16BE:',buf6.readInt16BE(0));//256
console.log('readInt16LE:',buf6.readInt16LE(0));//1
buf6.writeInt16LE(256,2)
console.log(buf6);
