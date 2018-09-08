import { promisify } from 'util';
import { resolve as r } from 'path';
import { readFile, writeFileSync as wfs, appendFileSync as afs } from 'fs';
import * as qs from 'querystring';

// __dirname 是指 当前文件
promisify(readFile)(r(__dirname,'../package.json'))
.then(data => {
    data = JSON.parse(data)
    console.log(data.main)
    /* wfs(r(__dirname, './name.txt'),String(data.name),'utf8') */
    afs(r(__dirname, './name.txt'),String(data.main)+"\r",'utf8')
})

// 异步操作
const readAsync = promisify(readFile);
(async function getData(){
    let data = await readAsync(r(__dirname, '../package.json'));
    //data = JSON.parse(data)
    console.log(JSON.parse(data).name)
})()