const { odd, even } = require('./var'); //함수안에 불러올 모듈의 경로를 적음(js, json파일 사용가능)
//import {odd, even} from './var';

function checkOddOrEven(num){
    if (num % 2){//홀수면
        return odd;
    }
    return even;
}
module.exports = checkOddOrEven;
//export default checkOddOrEven;