//node.js의 http모듈을 불러온다.
var http = require('http');

var server = http.createServer(function (request,response) {
    console.log('외부에서 요청이 들어옴')

    response.end('welcome to my homepage!')
})

server.listen(3000,function () {
    console.log('서버 실행중','http://localhost:3000');
})