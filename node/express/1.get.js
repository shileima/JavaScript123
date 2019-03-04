const express = require('./express');
const app = express();

app.get('/hello',(req,res) => {
  res.end('hello')
})

app.listen('7070',()=>{
  console.log('Express server listen at port 7070')
})