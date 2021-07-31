node는 운영체제의 정보를 가져올 수 있음, 운영체제 별로 다른 서비스를 제공하고 싶을 때 유용하게 사용
os.js 참고

운영체제 정보 ______________________
os.arch(): x64
os.platform(): darwin
os.type(): Darwin
os.uptime(): 6403824
os.hostname(): kangseonghee-MacBookPro.local
os.release(): 20.4.0
경로__________________________
os.homedir(): /Users/kkxxh
os.tmpdir(): /var/folders/6_/gqgg088j5lnfthdw6rtfnbm40000gn/T
cpu 정보________________
os.cpus(): [
  {
    model: 'Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz',
    speed: 2600,
    times: { user: 78432550, nice: 0, sys: 41942340, idle: 611495080, irq: 0 }
  },
  {
    model: 'Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz',
    speed: 2600,
    times: { user: 2054500, nice: 0, sys: 2240010, idle: 725518080, irq: 0 }
  },
  {
    model: 'Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz',
    speed: 2600,
    times: { user: 60731540, nice: 0, sys: 29421960, idle: 639663810, irq: 0 }
  },
  {
    model: 'Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz',
    speed: 2600,
    times: { user: 2083210, nice: 0, sys: 1976040, idle: 725752820, irq: 0 }
  },
  {
    model: 'Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz',
    speed: 2600,
    times: { user: 41909050, nice: 0, sys: 20859310, idle: 667048300, irq: 0 }
  },
  {
    model: 'Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz',
    speed: 2600,
    times: { user: 2126590, nice: 0, sys: 1798600, idle: 725886250, irq: 0 }
  },
  {
    model: 'Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz',
    speed: 2600,
    times: { user: 34413130, nice: 0, sys: 16798110, idle: 678604760, irq: 0 }
  },
  {
    model: 'Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz',
    speed: 2600,
    times: { user: 2149470, nice: 0, sys: 1671430, idle: 725989890, irq: 0 }
  },
  {
    model: 'Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz',
    speed: 2600,
    times: { user: 26995340, nice: 0, sys: 13090040, idle: 689729940, irq: 0 }
  },
  {
    model: 'Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz',
    speed: 2600,
    times: { user: 2179270, nice: 0, sys: 1562030, idle: 726068920, irq: 0 }
  },
  {
    model: 'Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz',
    speed: 2600,
    times: { user: 21733550, nice: 0, sys: 10322360, idle: 697758750, irq: 0 }
  },
  {
    model: 'Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz',
    speed: 2600,
    times: { user: 2160380, nice: 0, sys: 1459600, idle: 726189610, irq: 0 }
  }
]
os.cpus().length: 12
메모리 정보________________
os.freemem() 519847936
os.totalmem() 17179869184



os.arch(): 아키텍쳐 정보
os.platform(): 플랫폼 정보
os.type(): 운영체제의 종류
os.uptime(): 운영체제 부팅 이후 흐른 시간
os.hostname(): 컴퓨터의 이름
os.release(): 운영체제의 버전
os.homedire(): 홈 디렉터리 경로
os.tmpdire(): 임시 파일 저장 경로
os.cpus(): 컴퓨터의 코어 정보
os.cpus().length : 컴퓨터의 코어 개수
os.freemem(): 사용 가능한 메모리(RAM) 
os.totalmem(): 전체 메모리 용량
os.constants(): 각종 에러와 신호에 대한 정보(EADDRINUSE, ECONNRESET)