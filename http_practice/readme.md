res 객체
res.writeHead : 응답에 대한 정보를 기록

res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
  //성공적인 요청을 의미하는 200, 응답에 대한 정보를 보내는 콘텐츠의 형식이 HTML, 한글 표시를 위해 charset을 utf-8로 지정
  //헤더 : 이 정보가 기록되는 부분
   
res.write('<h1>Hello Node!</h1>');
res.write : 데이터가 기록되는 부분을 본문

res.end('<p>Hello Server</p>');
res.end : 응답을 종료

