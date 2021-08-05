worker_threads는 멀티 스레드 방식으로 작업할 수 있도록

worker_threads.js 참고
worker에서 on method를 사용할 때는 worker를 직접 종료해야한다.
parentPort.close(); //부모와의 연결이 종료
worker.on('exit'); //종료 시 실행


prime-worker.js 참고
여덟 개의 스레드가 일을 나눠서 처리하도록 함
속도가 10배는 빨라짐