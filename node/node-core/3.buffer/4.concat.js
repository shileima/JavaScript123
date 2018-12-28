let buf11 = Buffer.from('珠')
let buf12 = Buffer.from('峰')

/* 第一个参数必须是数组,Buffer 或 Uint8Array*/
//  The "list" argument must be one of type Array,
// Buffer, or Uint8Array. Received type object

Buffer.concat2 = function(list,total=list.reduce((len,item)=>len+item.length,0)){
    let result = Buffer.alloc(total)
    if(Object.prototype.toString.call(list) !== "[object Array]"){
        console.log('arguments must be a Array')
        return;
    }
    if(list.length === 1){
        return list[0]
    }
    let startIndex = 0;

    // 第一种利用write方法
    /*list.forEach((item,index)=>{
        //console.log(item.toString());
        //console.log('length:',item.length);
        //console.log('startIndex:',startIndex);
        result.write(item.toString(),startIndex)
        //console.log(result);
        startIndex = item.length;
    })*/

    //第二种利用两层循环
    for(let buf of list){
        for(let b of buf){
            if(startIndex >= total){
                return result;
            } else {
                result[startIndex++] = b;
            }
            //result[startIndex++] = b;
        }
    }
    return result;
}

let res = Buffer.concat2([buf11,buf12],10)
console.log('res:',res); // <Buffer e7 8f a0 e5 b3 b0>
console.log(res.toString());// 珠峰

console.log('buf12 is Buffer:',Buffer.isBuffer(buf12));
console.log('Buffer.byteLength:',Buffer.byteLength('珠'));

