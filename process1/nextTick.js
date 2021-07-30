setImmediate(() => {
    console.log('immediate');
});

process.nextTick(() => {
    console.log('nextTick');
});

setTimeout(() => {
    console.log('timeout');
},0);

Promise.resolve().then(() => console.log('promise')); //resolve된 Promise도 nextTick 처럼 다른 콜백들보다 우선시 됨

//결과
//nextTick
//promise
//timeout
//immediate