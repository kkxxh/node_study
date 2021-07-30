폴더와 파일의 경로를 쉽게 조작하도록 도와주는 모듈
윈도 : C:\Users\kkxxh
mac : /home/kkxxh


path.sep: 경로의 구분자
path.delimiter: 환경변수의 구분자 (윈도: ;, mac: :)
path.dirname(경로): 파일이 위치한 경로
path.extname(경로): 파일의 확장자
path.basename(경로, 확장자): 파일의 이름(확장자 포함) 표시
path.parse(경로): 파일의 경로를 root,dir,base,ext,name으로 분리
path.format(객체): path.parse()한 객체를 파일 경로로 합침
path.normalize(경로): /나 \를 실수로 여러번 사용했거나 혼용했을 때 정상적인 경로로 변환
path.isAbsolute(경로): 파일의 경로가 절대경로인지 상대 경로인지를 true 나 false로 알림
path.relative(기준경로, 비교경로): 첫번째 경로에서 두번째 경로로 가는 법을 알려줌
path.join(경로, ...): 여러 인수를 넣으면 하나의 경로로 합침
path.resolve(경로, ...): path.join()과 비슷하지만 차이가 있음 절대경로로 인식해서 앞의 경로를 무시함

윈도에서 mac 으로 path.posix.sep, path.posix.join() 사용
mac에서 윈도로 path.win32.sep, path.win32.join() 사용