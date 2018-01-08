//文件系統

//1.引入文件系統模塊
var fs = require('fs');

//2.通過對象調用方法
var content = fs.readFileSync('file.txt','utf-8');//同步讀取
console.log(content);

fs.writeFileSync('file2.txt',content,'utf-8');//同步寫入

//異步讀取
fs.readFile('file.txt','utf-8',function (err,data) { // 會有一個回調函數err為錯誤信息，data為數據
    if(err) throw err;//如果有異常，拋出異常
    console.log(data);
});
console.log(1);

//異步寫入
fs.readFile('file.txt','utf-8',function (err,data) { // 會有一個回調函數err為錯誤信息，data為數據
    if(err) throw err;//如果有異常，拋出異常
    fs.writeFile('write.txt',data,'utf-8'); //異步寫入《---
});