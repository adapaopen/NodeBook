//1.引入fs模塊
var fs = require('fs');

//2.調用方法

//刪除文件
fs.unlink('write.txt',function (err) { //異步刪除會返回個回調函數
    if(err) throw err;//拋出異常
    console.log('文件刪除成功');
});

//創建文件夾 同步
fs.mkdirSync('MKDIR');

//刪除文件夾 同步
fs.rmdirSync('MKDIR');

//異步創建文件夾and文件
fs.mkdir('MKDIR',function () {
    fs.readFile('file.txt','utf-8',function (err,data) {
        if(err) throw err;
        fs.writeFile('./MKDIR/write.txt',data,'utf-8');
    });
});

//異步刪除文件夾
fs.unlink('./MKDIR/write.txt',function () {
    fs.rmdir('MKDIR',function (err) {
        if(err) throw err;
        console.log('文件夾刪除成功!');
    });
});

