//falsy 거짓으로 취급되는 데이터
//0을 falsy로 취급하는 것이 일반적
console.log(1!=1); //비교연산의 결과로 false
console.log(Boolean(1!=1));//Boolean() 참거짓 출력
console.log(Boolean(0)); //0 데이터가 참 거짓이냐?
console.log(Boolean(0.0000000000000000000001)); //데이터가 존재하면 true
console.log(Boolean(-1)); //존재하면 true (-는 부정적이니 false x)
console.log(Boolean("안녕"));
console.log(Boolean("")); //false
//js 문자열은 기본형으로 저장되어서 객체의 다른 속성이 없음, 
// 때문에 0과 ""은 같은 방식으로 저장됨
let num="010-1111-1234";
console.log(num.split("-"));//속성과 함수가 존재하는 것은 객체다

//NaN (Not a Number) 
//수가 아닌 문자열을 수로 형변환할 때 발생하는 오류를 상태로 표현 => false
console.log("십"*2);
console.log(Number("십일"));
console.log(NaN);
console.log(Boolean(NaN)); //false

// 0  "" : 없는 수 없는 문자열 
// null(비어있음=>일반적) undefined(정의되지 않음,프로그래밍용어)
let score=null; //성적이 비어있다.(None==python)
//score=0; //0점이다
console.log(Boolean(null));
//{score:None} =>json '{"score":null}'
console.log(Number(null)); //0

let name; //undefined 상태 : 변수를 만들고 아무것도 대입하지 않은 상태

console.log(name+" 안녕"); //undefined 안녕
//일반적으로 아무것도 정의되지 않은 변수는 사용시 오류! => 상태 undefined (NaN와 유사함)
console.log(Boolean(name)); //false
//  0  "" null undefined NaN














