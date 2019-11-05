let bluebird = require('bluebird');
let fs = require('fs');
// async+await 解决了异步的问题
//  1.可以让代码像同步 
//  2.可以try + catch
//  3.可以使用promise的形式
let read = bluebird.promisify(fs.readFile);
async function r() {
    try{
        let r1 = await read('100.txt', 'utf8');
        let r2 = await read(r1, 'utf8');
        let r3 = await read(r2, 'utf8');
        return r3;
    }catch(e){
        console.log(e)
    }
}
r().then(data=>{
    console.log(data);
},(er)=>{
    console.log(er)
});
// async + await = generator + co


// callback  promise  generator async+await