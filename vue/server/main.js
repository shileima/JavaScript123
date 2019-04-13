const express = require('express');
const fs = require('fs');
const app = express();
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", 'http://localhost:8080');
    res.header('Access-Control-Allow-Headers','Content-Type,Content-Length,Authorization, Accept,X-Requested-With')
    req.method === 'OPTIONS' ? res.send('') : next();
})

const bodyParser = require('body-parser');
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
            ary.push(obj);
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
app.post('/addList',(req,res)=>{
    // console.log(req)
    let obj = req.body;
    obj.bookId = Math.random();
    fs.readFile('./list.json','utf-8',(err,data)=>{
        if(!err){
            let ary = JSON.parse(data);
            ary.push(obj);
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