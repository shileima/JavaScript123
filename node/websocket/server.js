let express = require('express');
let app = express();
let server = require('http').createServer(app);
let io = require('socket.io')(server);
let path = require('path');

app.use(express.static(path.resolve(__dirname, 'public')))

app.get('/hello', (req, res) => {
    res.send('hello')
})
io.on('connection', socket => {
    console.log('a user connected')
    socket.on('message', function (message) {
        console.log(message)
        socket.send("server:" + message)
    })
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
})

server.listen(8080, () => {
    console.log('server running at 8080')
})