/* ES6 async/await 比 co库 要快 */
const co = require('co');
const fetch = require('node-fetch')

// 第一种方法：使用co
co(function *(){
    console.time('co cost')
    let res = yield fetch('http://api.douban.com/v2/movie/1291843');
    // console.log(JSON.parse(res)) // 为什么不行？
    let movie = yield res.json();
    console.log('co:',movie.summary);
    console.log('==================');
    console.timeEnd('co cost')
})

// console.log(JSON.parse('{"name":"loading"}')) // json 格式 { name: 'loading' }
// console.log(typeof JSON.stringify({ name: 'loading' })) // string

// 第二种方法：摆脱 co 的依赖，使用ES7 async await
async function fetchDate(){
    console.time('async cost')
    let res = await fetch('http://api.douban.com/v2/movie/1291843');
    // console.log(JSON.parse(res))
    let movie = await res.json();
    console.log('async:',movie.summary);
    console.log('==================');
    console.timeEnd('async cost')
}
fetchDate()