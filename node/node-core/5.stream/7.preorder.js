let fs = require('fs')
let path = require('path')
/*
* 异步的先序深度优先遍历
* */

function preDeep(dir,callback) {
    console.log('dir:',dir);
    !function next(i) {
        fs.readdir(dir,(err,files)=>{
            //console.log('i:',i);
            if(i>=files.length) return callback();
            let child = path.join(dir,files[i]);
            fs.stat(child,(err,stat)=>{
              if(stat.isDirectory()){
                  return preDeep(child,()=>next(i+1))
              }else{
                  console.log('file:',child);
                  next(i+1)
              }
            })
        })
    }(0)
}
preDeep('a',() => console.log("异步的先序深度优先迭代完毕！"))