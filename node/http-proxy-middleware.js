const express = require('express');
const proxy = require('http-proxy-middleware');

const app = express();

app.use('/', proxy({
    target: "http://www.newsyuelu.com",
    changeOrigin: false
}))

app.listen(3000, () => {
    console.log('server running at port 3000')
});
