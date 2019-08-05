const express = require('express');
let app = express();
app.all('*', function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin','*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST');  
    //res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');  
    // res.setHeader("Content-Type", "application/json;charset=utf-8"); 
    res.setHeader("Content-Type", "application/json;charset=utf-8"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/api/user',(req,res)=>{
    
    res.json({status:'ok',data:[
        {
            "id":1,
            "name":"loading"
        },
        {
            "id":2,
            "name":"hot Berg"
        },
        {
            "id":3,
            "name":"messi"
        },
        {
            "id":4,
            "name":"jack"
        },
        {
            "id":5,
            "name":"alice"
        }
    ]});
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))