const { worker } = require('cluster');
const {
    Worker, isMainThread, parentPortk, workerData, parentPort,
} = require('worker_threads');

if(isMainThread){//부모일때
const threads = new Set();
threads.add(new Worker(__filename,{ //WorkerData 속성으로 원하는 데이터를 줄 수 있음
    workerData: {start: 1},
}));
threads.add(new Worker(__filename,{
    workerData: {start: 2 },
}));
for (let worker of threads){
    worker.on('message',message => console.log('from worker',message));
    worker.on('exit',() => {
        threads.delete(worker);
        if (threads.size == 0){
            console.log('job done');
        }
    });
} 
}else {//worker일때
const data = workerData;
parentPort.postMessage(data.start+100);
}

//결과
//from worker 101
//from worker 102
//job done