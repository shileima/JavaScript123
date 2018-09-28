const Koa = require('koa')
const app = new Koa()
const WebSocket = require('ws')
const wss = new WebSocket.Server({port:3007})

wss.on('connection',function(ws){
  ws.on('message',function(data){
    console.log(data)
  })
  ws.send('我不爱你...')
})