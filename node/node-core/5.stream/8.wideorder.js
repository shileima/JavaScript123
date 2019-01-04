let fs = require('fs')
let path = require('path')
/*
* 异步的广度优先遍历
* */

function preWide(dir) {
    let arr = [dir];
    while(arr.length > 0){
        console.log(arr);
        let current = arr.shift();
        console.log('current:',current);
        let stat = fs.statSync(current);

        if(stat.isDirectory()){
        // readdir是异步操作,不会终端while循环；
        // 异步处理过程中arr可能为空,while循环就出错啦
        console.log("stat...");
        /*fs.readdir(current,(err,files)=>{
            console.log('readdir....');
            if(err) throw err;
            files.forEach(item=>arr.push(path.join(current,item)))
        })*/

            let files = fs.readdirSync(current)
            files.forEach(item=>{
                console.log('readdirSync....');
                arr.push(path.join(current,item))
            })
        }
    }
}
preWide('a')