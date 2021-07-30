process 객체는 현재 실행되고 있는 노드 프로세스에 대한 정보를 담고잇음

$node
process.version //설치된 노드의 버전
process.arch //프로세서 아키텍쳐 정보
process.platform //운영체제 플랫폼 정보
process.pid //현재 프로세스의 이름
process.uptime() //프로세스가 시작된 후 흐른 시간(단위:초)
process.execPath //노드의 경로
process.cwd() //현재 프로세스가 실행되는 위치
process.cpuUsage() //현재 cpu 사용량

process.env //시스템의 환경변수, 서비스의 중요한 키를 저장하는 공간
    NODE_OPTIONS = --max-old-space-size-8192 //노드를 실행할 때의 옵션들을 입력받는 환경 변수
    UV_THREADPOOL_SIZE = 8 //노드에서 기본적으로 사용하는 스레드풀의 스레드 개수를 조절

   >> const secretId = process.env.SECRET_ID;
   >> const secretCode = process.env.SECRET_CODE;
    
dotenv 참고

process.nextTick //(콜백)
이벤트 루프가 다른 콜백함수들 보다 nextTick의 콜백함수를 우선으로 처리하도록 만든다
nextTick.js 참고

process.exit()
실행중인 노드 프로세스를 종료함
서버 환경에서 사용하면 서버가 멈추므로 특수한 경우를 제외하고는 서버에서 사용하지 않음
process.exit(); //인수를 주지 않거나 0을 주면 정상 종료, 1을 주면 비정상 종료
exit.js 참고