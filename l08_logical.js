let a=10;
let b=20;
console.log("a<b=",a<b); //비교연산
console.log("a>b=",a>b); //비교연산
console.log("a==b=",a==b); //비교연산
console.log("a===b=",a===b); //비교연산
console.log("a!=b=",a!=b); //비교연산
console.log("a!==b=",a!==b); //비교연산
//논리연산 ||합집합(+) &&교집합(*) !차집합(-)
let age=39;
//age가 20 이상이고 40 이하인가? => 논리
console.log( age >= 20 && age<=40 );  // =>(x) >=(o)
//age가 20과 같거나 작고 80과 같거나 크냐? 
console.log( age<=20 || age>=80 );
//age가 50보다 큰것이 아니다
console.log( !(age>50));


