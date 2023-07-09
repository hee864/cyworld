// 데이터타입연산자 실습
//연산자1.산술연산자 +(숫자와 문자열이 더해지면 문자열이 된다.) - * / %,2. 비교 연산자 <, >, <=, >=, 엄격한 동치연산자=== ,!==는 데이터타입과 값도 다 비교, 추상적동치연산자인 == != 과 구분해야함. 데이터타입과 상관없이 값만 비교,예를 들어 65와 A는 같다고 판단.  3.논리연산자 기호를 연속 두번으로 써야함 &&양쪽모두 true여야 true || 한쪽만 true이면 true  !(not):boolean을 반전시킴.
undefined
1+"만"
// '1만'
1+"1"
// '11'
1-"1"
// 0
"코드"+"캠프"
// '코드캠프'
"123"==123
// true
"123"===123
// false
true&&false
// false

true||false
// true
!false
// true
!true
// false

//조건문 실습 1
if(0){ console.log("정답")}
else {console.log("오답")}
// VM2442:2 오답
// 조건문 실습2 -예외처리
const profile={ 
    name: "cjftn", age:12, school:"ekfkawnlchemdgkrry"}
// undefined
if(profile.age>=20) {
    console.log("성인")}
else if (profile.age>=8 && profile.age<=19) {
    console.log("학생")}
    else if (profile.age>0){ console.log("어린이")}
else {console.log("잘못입력")}
// VM3593:4 학생

