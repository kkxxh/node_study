//명령 프롬프트 명령어인 ls을 노드로 실행
const exec = require('child_process').exec;

var process = exec('ls');

process.stdout.on('data',function(data){
    console.log(data.toString());
}); //실행 결과

process.stderr.on('data',function(data){
    console.error(data.toString());
}); //실행 에러
