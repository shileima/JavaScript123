let http = require('http');

let start = 0; // 默认从 0 开始；每次下载 5 个；保存到一个新的文件中 test.txt

let fs = require('fs');
let ws = fs.createWriteStream('./test.txt');

// 监控用户输入，暂停下载
let mode = 'start';
process.stdin.on('data', function (chunk) {
  if (chunk.includes('stop')) {
    mode = 'stop'
  } else {
    mode = 'start';
    download();
  }
})
function download() {
  http.get({
    hostname: 'localhost',
    port: 5555,
    headers: {
      Range: `bytes=${start}-${start + 5}`
    }

  }, function (res) {
    res.on('data', function (chunk) {
      ws.write(chunk)
      let total = res.headers['content-range'].split('/')[1];
      if (start <= total) {
        start += 5
        setTimeout(function () {
          if (mode == 'start') {
            download()
          }
        }, 1000)
      } else {
        ws.end();
      }

    })
  })

}

download()