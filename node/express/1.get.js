const express = require('./express');
const app = express();

// 命令行模拟GET请求
// curl -X GET http://localhost:7070/hello
app.get('/hello',(req,res) => {
  res.end('get hello\r\n')
})

// 浏览器只能发get请求，通过下面可以模拟post请求
// CURL -X POST http://localhost:7070/world
app.post('/world',function(req,res) {
  res.end('post world\r\n')
})
app.get('/world',function(req,res) {
  res.end('get world\r\n')
})

app.all('/all',function(req,res) {
  res.end('all=> no matter get or post\r\n')
})

app.get('*',function(req,res) {
  res.end('*=> 404 page\r\n')
})

app.listen('7070',()=>{
  console.log('Express server listen at port 7070')
})