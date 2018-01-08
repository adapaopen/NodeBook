//通過http模塊，創建本地server

var http = require('http'); //導入HTTP模塊


//2.調用方法創建server

var server = http.createServer(function (req,res) {//req  请求对象 |res   响应对象
    console.log('客戶端向服務器發送請求：'+ req.url);
    res.writeHead(200,{'Content-type':'text/plain'});
    res.end('Server is working');
});

//3.服務對象監聽服務器地址以及端口號
server.listen(8888,'127.0.0.1');
console.log('server is running..');