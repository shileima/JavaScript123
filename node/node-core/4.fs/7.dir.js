let fs = require('fs');
/*fs.access('aa',fs.constants.W_OK,function(err){
    if(!err){console.log('access successful!');}else{
        console.log('access fail!');
    }
});

// a must be created before a/b-creation mkdir function excuting
fs.mkdir('aa',0o0666,function(err){
    if(!err){console.log('创建成功！');}else{
        console.log('创建失败！');
    }
});*/

// 异步递归创建目录方法 mkdirp 相当 Linux : mkdir -p
function mkdirp(dir){
    let paths = dir.split('/')
    console.log(paths);
    !function next(index){
        if(index > paths.length) return;
        let current = paths.slice(0,index).join('/');
        console.log(current);
        fs.access(current,fs.constants.R_OK,function(err){
            if(err){
                fs.mkdir(current,next.bind(null,index+1))
            }else(
                next(index+1)
            )
        })
    }(1)
}
mkdirp('a/b/c');
mkdirp('d/e/f');
