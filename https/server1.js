const http = require('http');

http.createServer((req,res) => {
  res.writeHead(500, {'Content-Type':'text/html; charset= utf-8'});
  res.write('<h1>Hello Node!</h1>');
  res.end('<p>Hello Server!</p>');  
})
.listen(8080,() => { //서버 연결
    console.log('8080번 포트에서 서버 대기 중입니다.');
})

//암호화를 적용하려면 https 모듈을 사용해야함