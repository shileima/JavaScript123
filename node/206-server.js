const http = require('http');
let fs = require('fs');
let path = require('path');

const hostname = 'localhost';
const port = '5555';

let downloadFile = path.resolve(__dirname, 'note.txt');
let total = fs.statSync(downloadFile).size;

console.log(total)

const server = http.createServer((req, res) => {

  let range = req.headers['range'];
  res.setHeader('Content-type', 'text/plain;charset=utf8');
  if (range) { // Range:bytes=0-5
    let [, start, end] = range.match(/(\d*)-(\d*)/);
    start = start ? Number(start) : 0
    end = end ? end - 1 : total
    res.statusCode = 206;
    res.setHeader('Content-range', `bytes ${start}-${end}/${total}`);
    fs.createReadStream(downloadFile, { start, end }).pipe(res)
  } else {
    fs.createReadStream(downloadFile).pipe(res)
  }
  // res.end("hello")
});

server.listen(port, hostname, () => {
  console.log(`server running at http://${hostname}:${port}/`);
});