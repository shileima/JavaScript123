let express = require('express');

let app = express();

app.get('/api/getUser',(req,res)=>{
    res.json({name:"loading"})
});

app.listen(3000,()=>console.log('server run at 3000 port'))
