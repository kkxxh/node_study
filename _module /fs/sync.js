const fs = require('fs');

console.log('시작');
let data = fs.readFileSync('./readme2.txt');
console.log('1번',data.toString());
data = fs.readFileSync('./readme2.txt');
console.log('2번',data.toString());
data = fs.readFileSync('./readme2.txt');
console.log('3번',data.toString());
console.log('끝');


//결과
//시작
//1번 저를 여러번 읽어보세요
//2번 저를 여러번 읽어보세요
//3번 저를 여러번 읽어보세요
//끝