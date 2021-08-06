
readFile.js 참고
readFile의 결과물은 버퍼(buffer)라는 형식으로 제공
버퍼는 사람이 읽을 수 있는 형식이 아니므로 toString을 통해 문자열로 변환

fs는 기본적으로 콜백 형식의 모듈

readFilePromise.js 참고
fs 모듈에서 promise 속성을 불러오면 프로미스 기반의 fs 모듈 사용 가능