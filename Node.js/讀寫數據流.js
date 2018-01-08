var http = require('http');
var fs = require('fs');

讀取文件流
var file = fs.createReadStream(__dirname + '/file.txt','utf-8');

寫入文件流
var wfile = fs.createWriteStream(__dirname + '/newfile.txt','utf-8');

var wfile2 = fs.createWriteStream(__dirname + '/newfile2.txt','utf-8');

file.pipe(wfile2);//pipe管道


var time = 0;
file.on('data',function (chunk) {
    time++;
    console.log('========writeing'+time+'========');
    //寫入數據
    wfile.write(chunk);
});

//搭建服務器
var server = http.createServer(function (rep,res) {
    res.writeHead(200,{'Content-type':'text/plain'});
    var file = fs.createReadStream(__dirname + '/file.txt','utf-8');
    file.pipe(res);
});

server.listen(3000,'127.0.0.1');
console.log('Server is running..');
