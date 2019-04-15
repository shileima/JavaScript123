const express = require('express');
const fs = require('fs');
const app = express();
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", 'http://localhost:8080');
    res.header('Access-Control-Allow-Headers','Content-Type,Content-Length,Authorization, Accept,X-Requested-With')
    req.method === 'OPTIONS' ? res.send('') : next();
})

const bodyParser = require('body-parser');
// 返回的对象是一个键值对，当extended为false的时候，
// 键值对中的值就为'String'或'Array'形式，为true的时候，则可为任何数据类型。
// 但是往mongodb里面存数据时_id是ObjectId类型的,存不进去。设为true就能存进去了
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/api/banner',(req,res)=>{
    fs.readFile('./banner.json','utf-8',(err,data)=>{
        if(!err){
            res.send({
                errorCode:0,
                data:JSON.parse(data)
            })
        }
    })
})
app.get('/hot',(req,res)=>{
    fs.readFile('./hot.json','utf-8',(err,data)=>{
        if(!err){
            res.send({
                errorCode:0,
                data:JSON.parse(data)
            })
        }
    })
})
app.get('/list',(req,res)=>{
    fs.readFile('./list.json','utf-8',(err,data)=>{
        if(!err){
            res.send({
                errorCode:0,
                data:JSON.parse(data)
            })
        }
    })
})
app.get('/collect',(req,res)=>{
    fs.readFile('./collect.json','utf-8',(err,data)=>{
        if(!err){
            res.send({
                errorCode:0,
                data:JSON.parse(data)
            })
        }
    })
})

app.post('/addCollect',(req,res)=>{
    // console.log(req)
    let obj = req.body;
    fs.readFile('./collect.json','utf-8',(err,data)=>{
        if(!err){
            let ary = JSON.parse(data);
            ary.unshift(obj);
            fs.writeFile('./collect.json',JSON.stringify(ary),(err)=>{
                if(!err){
                    res.send({
                        errorCode:0,
                        msg:'收藏成功'
                    })
                }else{
                    res.send({
                        errorCode:1,
                        msg:'收藏失败'
                    })
                }
            })
        }
    })
})

/* 删除收藏项 */
app.get('/delCollect',(req,res)=>{
    let delBookId = req.query.bookId;
    fs.readFile('./collect.json','utf-8',(err,data)=>{
        if(err){
            return console.error(err);
        }else{
            let ary = JSON.parse(data);
            //console.log(1,ary)
            for(var i=0;i<ary.length;i++){
                if(ary[i].bookId == delBookId){
                    ary.splice(i,1)
                }
            }
            //console.log(ary)
            fs.writeFile('./collect.json',JSON.stringify(ary),(err)=>{
                if(!err){
                    res.send({
                        errorCode:0,
                        msg:'删除成功'
                    })
                }else{
                    res.send({
                        errorCode:1,
                        msg:'删除失败'
                    })
                }
            })
        }
    })
})

app.post('/addList',(req,res)=>{
    // console.log(req)
    let obj = req.body;
    obj.bookId = Math.random();
    fs.readFile('./list.json','utf-8',(err,data)=>{
        if(!err){
            let ary = JSON.parse(data);
            ary.unshift(obj);
            fs.writeFile('./list.json',JSON.stringify(ary),(err)=>{
                if(!err){
                    res.send({
                        errorCode:0,
                        msg:'添加成功'
                    })
                }else{
                    res.send({
                        errorCode:1,
                        msg:'添加失败'
                    })
                }
            })
        }
    })
})

app.listen(8000,()=>{
    console.log('running on 8000')
});