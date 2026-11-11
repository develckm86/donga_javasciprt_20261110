console.log("안녕하세요!"); //문자열 String
console.log('안녕~'); //문자열
console.log(`잘가~${1+10}`); //템플릿리터럴


console.log(123.123*3); //수 Number
console.log(typeof "안녕"); //string
console.log(typeof 10.0111 , typeof 10); //number number

//  == != > < >= <= === !==  비교연산의 결과 boolean (bool)
console.log(10 == 10.0, typeof true, typeof false);
console.log( "10" == 10 );//js는 수학(+제외),비교 연산시 문자열을 수로 형변환해서 연산함
console.log( "10" - 1);
console.log( "33" * "33");
console.log( "33" / "33");
console.log( "33" % "7");
console.log( "33" + "7"); //더하기는 문자열이 우선
console.log( "33" + 7 ); //더하기는 문자열이 우선
//NaN Not a Number : 문자열을 수로 형변환하는데 수가 아닐때 오류 대신 상태를 나타내는 것 
console.log("삼십삼"*3);
console.log(Number("12.33")*2); //명시적 형변환!
console.log(Number("백일")); //NaN
console.log(isNaN("백일")); //true 수로 바꿀수 없어!
console.log("100.0"==100); //true
console.log("100.0"===100); //형변환 없이 비교
console.log(100.0 === 100); //js에서 실수정수 구분없어서 같음
//다른 언어에서는 정수 실수 구분이 있지만 수의 비교는 값(크기)을 비교함
//변수
let a=100
let b=200
a=1000
b=2000
console.log(a+b);
//상수 (파이썬에는 불가능)
const PI=3.1415;
//PI=31.1415 //TypeError: Assignment to constant variable.

let userName; //undefined : 아무것도 정의하지 않은 변수는 사용 불가 => 사용시 오류

console.log(userName+"안녕"); //일반적으로 오류 but 상태를 표시 : undefined안녕
 
//falsy data : 0, "", null(빈상태), NaN, undefined
console.log(Boolean(0), Boolean(""), Boolean(null), Boolean(NaN), Boolean(undefined));
//truthy data : falsy를 제외한 모든 data
console.log(Boolean(1),Boolean(-1),Boolean("  "),Boolean([]),Boolean({}));

//조건문
score=40; //60점 이상만 통과 (나머지 재시험)
//if score >= 60 :
//  print("통과") #들여쓰기가 영역
//else :    
if( score >=60 ){ //scope 영역(조건이 만족할때 실행되는 영역)
    console.log(score+"점은 통과");
}else{  //조건이 만족하지 않을 때 실행되는 영역
    console.log(score+"점은 재시험");
}


let age=15; 
let label=null;

if(age>=19){
    label="성인";
}else{
    label="미성년";
}

label= (age>=19) ? "성인" : "미성년";  //3항연산자

//label = "성인" if age >=19 else "미성년" #파이썬의 3항연산자
console.log(label);

//while True :
let i=0; //선언문
while(i<5){ //조건문
    ++i; //증감문 i를 1씩 증가하겠다.
    console.log("안녕"+i);
}
for(let i=0; i<5; i++){
    console.log("잘가~"+i);
}


