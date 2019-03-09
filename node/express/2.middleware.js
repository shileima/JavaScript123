const express = require('./middleware');
const app = express();

app.use((req,res,next)=>{
    res.setHeader('Content-Type','text/html;charset=utf8')
  console.log('第一个中间件')
  next('这里出错！')
})

app.use('/water',(req,res,next)=>{
  console.log('过滤杂质')
  //res.end('over1')
  next()
})

app.use((req,res,next)=>{
  res.end('over2')
})

// 错误处理中间件
app.use('/hello',(err,req,res,next)=>{
  console.log('Error hello 1' + err)
  // 错误中间件的错误可以传递给下一个错误中间件
  next('hello 1 next error') 
})
app.use('/hello',(err,req,res,next)=>{
  console.log('Error hello 2' + err)
})
app.use((err,req,res,next)=>{
  console.log('错误处理中间件：' + err)
  res.end(err)
})

app.listen('7070',()=>{
  console.log('Express server listen at port 7070')
})