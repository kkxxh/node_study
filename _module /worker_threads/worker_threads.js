const {
    Worker, isMainThread, parentPort,
} = require('worker_threads');

//isMainThread로 메인 스레드에서 실행되는지, worker스레드에서 실행되는지 확인
if(isMainThread){//parent일 때,
    const worker = new Worker(__filename); //현재 파일(__filename)을 워커 스레드에서 실행
    worker.on('message',message => console.log('from worker',message)); //이벤트 리스너로 부모로부터 메세지를 받음
    //worker.once('message',message => console.log('from worker',message)); //메세지를 한번만 받고 싶을 때
    worker.on('exit', () => console.log('worker exit'));
    worker.postMessage('ping');//워커에 데이터를 보냄
}else {//worker일때
    parentPort.on('message', (value) => {
        console.log('from parent', value);
        parentPort.postMessage('pong');
        parentPort.close(); //부모와의 연결이 종료
    });
}

//결과
//from parent ping
//from worker ping
//worker exit
