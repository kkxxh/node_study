const express = require('express');
const morgan = require('morgan');
//const session = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv'); //.env파일을 읽어서 process.env로 만듬
const path = require('path');
const cookieParser = require('cookie-parser');

dotenv.config();

const app = express(); //express 모듈을 실행해 app 변수에 할당
app.set('port', process.env.PORT || 3000); 

//미들웨어 연결
app.use(morgan('dev'));//기존 로그 외의 다른 로그 확인 가능

//정적인 파일을 제공하는 라우터
app.use('/',express.static(path.join(__dirname,'public')));

//body parser
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use(cookieParser(process.env.COOKIE_SECRET)); //cookie-parser는 요청에 동봉된 쿠키를 해석해 req.cookies객체로 만듬
app.use(session({
    resave:false,
    saveUninitialized:false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
        httpOnly:true,
        secure: false,
    },
    name:'session-cookie',
}));
app.use((req,res,next) => {
    console.log('모든 요청에 다 실행됩니다.');
    next();
});

app.get('/',(req,res,next) => {
    console.log('GET / 요청에서만 실행됩니다.');
    next();
}, (req,res) => {
    throw new Error('에러는 에러 처리 미들웨어로 갑니다.');
});

app.use((err,req,res,next) => {
    console.error(err);
    res.status(500).send(err.message);
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'),'번 포트에서 대기중');
}) 