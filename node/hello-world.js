const http = require('http');
const url = require('url');

const hostname = 'localhost';
const port = '5555';

const server = http.createServer((req,res) => {

  const pathname = url.parse(req.url).pathname;
  const query = url.parse(req.url,true).query;
  const sex = query.sex;

  console.log('pathname:',pathname)
  console.log('query:',query)
  console.log('sex:',sex)
  
  
  // res.statusCode = 200;
  // res.setHeader('Content-Type','text/plain');
  res.writeHead(200,{'Content-Type':'text/html'});
  res.write('<h1></h1>');
  res.end('<h1>Hello World!</h1>\n' + 'url:' + req.url); // url: /
});

server.listen(port, hostname, ()=>{
  console.log(`server running at http://${hostname}:${port}/`);
});