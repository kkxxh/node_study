const http = require('http');

http.createServer((req,res) => {
    console.log(req.url, req.headers.cookie); //쿠키는 req.headers.cookie에 들어있음
    res.writeHead(200,{'Set-Cookie': 'mycookie=test'}); 
    //응답의 헤더에 쿠키를 기록해야 하므로 writeHead
    //Set-cookie는 브라우저한테 다음과 같은 값의 쿠키를 저장하라는 의미
    res.end('Hello cookie');
})
.listen(8083,() =>{
    console.log('8083 포트에서 서버 대기중입니다!')
})