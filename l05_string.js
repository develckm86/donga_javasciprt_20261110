let s="문자열"; // '문','자','열'
s='안녕하세요~';
a=10;
b=20;
s="10+20="+a+b;
console.log(s);
s="10+20="+(a+b);
console.log(s);

s=`${a}x${b}=${a*b}`; //템플릿 리터럴 f"{a}+{b}={a+b}"
console.log(s);
//SyntaxError: Invalid or unexpected token 문자열의 라인개행(enter)를 허용하지 않음
//s="안녕
//    하세요!"

//s="""""";
s=`안녕 
하세요~`; //js는 백틱이 라인개행을 포함

a=20; b=30; c=40; 

console.log(Number("10"));
console.log(Number("10.12"));
console.log(Number("십")); //NaN






