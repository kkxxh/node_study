util은 각종 편의 기능을 모아둔 모듈

util.deprecate : 함수가 deprecated 처리 되었음을 알림
                첫번째 인수로 넣은 함수를 사용했을 때 경고 메세지(두번째 인수) 출력
    deprecated는 프로그래밍 용어로 중요도가 떨어져 더 이상 사용되지 않고 앞으로는 사라지게 될 것이라는 뜻

util.promisify : 콜백 패턴을 프로미스 패턴으로 바꿈. 바꿀 함수를 인수로 제공
                이렇게 바꿔두면 async/await 패턴까지 사용할 수 있음
                