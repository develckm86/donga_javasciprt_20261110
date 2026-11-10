// 모든 프로그램은 data로 -> 행위 
// 수(연산) <-> 자료(저장)
// 기본형 <-> 자료형 Object(객체)
let obj={name:"경민",age:40};//저장 -> 자료형
let a=10.1;
let b=20; //수->연산
console.log(a+b);
console.log(typeof a); //number
console.log(typeof obj); //object 모든 자료형은 object로 출력됨
console.log(a == b); // 비교연산자의 결과는 boolean
console.log(typeof false ); // 비교연산자의 결과는 boolean
console.log(10>9); //true
console.log(10.0 == 10);//true
console.log("10" == 10 ); //true 동등비교연산시 두개의 data가 다르면 형변환 (문자열=>수)
console.log("10" === 10 ); //false 엄격한 동등비교연산 

let c=true;
c=false;
c=10.1 > 10;

console.log(10*7); //70
console.log(10**7); //10000000
console.log(10/7); //1.4285714285714286
console.log(10%7); //3
console.log(10-7); //3
console.log(10+7); //3
console.log("10"+7); //"107"  : 수를 문자열로 변경
console.log("10"+"7"); //"107" : 문자열은 더하기 연산이 가능

//+를 더하기 제외하고 모든 문자열 연산은 문자열을 수로 변경
//js 문자열 곱하기 연산이 불가!!!
console.log("10"*3); //30, 파이썬 :"101010"
console.log("안녕"*3);//NaN(Not a Number) : 오류인 상태 (오류x)
//문제
console.log("1000"/4); //250
console.log("잘가"/2); //NaN
console.log(Number("777")*2);
console.log(Number("쉬는시간")*2);



















