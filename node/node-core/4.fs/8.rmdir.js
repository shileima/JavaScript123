let fs = require('fs')
let path = require('path')
// 1、同步删除非空目录及子目录(深度优先)
function rmdirSync(dir){
    try {
        let files = fs.readdirSync(dir)
        files.forEach(function(file){
            let current = dir + '/' + file;
            let child = fs.statSync(current)
            if(child.isDirectory()){
                rmdirSync(current)
            } else {
                //console.log(typeof child);
                fs.unlinkSync(current)
            }
        })
        fs.rmdirSync(dir)
        console.log("删除成功！");
    } catch(e){
        console.log("删除失败！",e);
    }
}
//rmdirSync('./a')

// 2、异步删除非空目录及子目录（Promise版）
function rmPromise(dir){
    return new Promise((resolve,reject)=>{
        fs.stat(dir,(err,stat)=>{
            if(err){ return reject(err) }
            if(stat.isDirectory()){
                fs.readdir(dir,(err,files)=>
                //箭头函数右侧返回一行的话，无需添加{}，多行则必须
                //如果大括号内返回是递归函数，则函数前必须添加 return
                    {
                        Promise.all(files.map(file => rmPromise(path.join(dir,file)))).then(()=> fs.rmdir(dir,resolve))
                        //console.log(222)
                    }
                )
            }else{
                fs.unlink(dir,resolve)
            }
        })
    })
}
rmPromise(path.resolve(__dirname,'../5.stream/b')).then(()=>{
    console.log("删除成功！");
}).catch((e)=>{console.log("删除失败！"+e);})

