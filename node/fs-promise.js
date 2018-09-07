/**
 * Created by Loading on 2018/9/6.
 */

const fs = require('fs');
const util = require('util');

util.promisify(fs.readFile)('./package.json','utf8')
    //.then(JSON.parse)  //.then(data=>JSON.parse(data)) // 可以省略
    .then(data => {
        console.log(1,JSON.parse(data).name)
    })
    .catch(err => {
        console.log(err)
    })

// async 统一世界 最慢
const readAsync = util.promisify(fs.readFile);
(async function getData(){
    let data = await readAsync('./package.json');
    //data = JSON.parse(data)
    console.log(2,JSON.parse(data).name)
})()

// node.js 自带 readFileAsync 函数，速度最快
let data = fs.readFileSync('./package.json');
console.log(3,JSON.parse(data).name)

// 打印结果
// 3 'myNodeTest'
// 1 'myNodeTest'
// 2 'myNodeTest'



