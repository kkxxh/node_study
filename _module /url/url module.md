인터넷 주소를 쉽게 조작하도록 도와줌
* WHATWG 방식
url.js참고
searchPaarams.js 참고

url.parse(주소): 주소를 분해
url.format(객체): 분해했던 주소를 다시 원상태로 조립


searchParams.getAll(키): 키에 해당하는 모든 값을 가져옴
get(키): 키에 해당하는 첫번째 값을 가져옴
has(키): 해당 키가 있는지 없는지 검색
keys(): 모든 키를 객체로 가져옴
values(): 모든 값을 반복기 객체로 가져옴
append(키, 값): 해당 키를 추가함
set(키, 값): 같은 키의 값들을 모두 지우고 새로 추가
delete(키): 해당 키를 제거
toString(): 조작한 객체를 다시 문자열로 만듬