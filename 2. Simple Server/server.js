// http 모듈을 가져옴
const http = require('http');


// 호스트이름과 port 번호 지정
const hostname = '127.0.0.1';
const port = 4000;

function onRequest(req, res) {
    console.log("User requests" + req.url);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write('Server powered by Node.js');
    res.end();
}

function onListen() {
    console.log(`Server running at http://${hostname}:${port}/`);
}

// 서버를 생성하고, 클라이언트의 요청을 기다림
const server = http.createServer(onRequest);
server.listen(port, hostname, onListen);