//事件模塊

//1.引入事件模塊
var events= require('events');

//2.創建EventEmitter對象
var myEmitter = new events.EventEmitter();

//3.註冊事件
myEmitter.on('someEvent',function (msg) {
    //異步
   setImmediate(() =>{
       console.log('註冊事件');
       console.log(msg);
   });
});

//4.觸發事件
myEmitter.emit('someEvent','實現事件并傳遞此參數到註冊事件的回調函數中');

console.log(1);