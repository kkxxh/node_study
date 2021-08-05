worker_threads는 멀티 스레드 방식으로 작업할 수 있도록

worker_threads.js 참고
worker에서 on method를 사용할 때는 worker를 직접 종료해야한다.
parentPort.close(); //부모와의 연결이 종료
worker.on('exit'); //종료 시 실행