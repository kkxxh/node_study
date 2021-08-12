const express = require('express');
const path = require('path');

const app = express(); //express 모듈을 실행해 app 변수에 할당
app.set('port', process.env.PORT || 3000); 

app.get('/',(req,res) => { // '/'에 대한 get 요청이 올 때의 동작
    //res.send('Hello, Express');
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'),'번 포트에서 대기중');
}) 