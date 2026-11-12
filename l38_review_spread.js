function sum(a,b,c,d=0){
    let result = a+b+c+d;
    console.log(a,b,c,d);
    return result;
}
//왜? 함수 내부의 변수(지역변수)를 함수의 밖에서 호출 불가 (scope)
//대답 : 지역 변수는 지역에서만 사용가능 (50), 
//console.log(result);
console.log(sum(10,20,30));
console.log(sum(10,20,30,40));
console.log(sum(10,20,30,40,50));
console.log("13"*3); // "13" => 13*3
console.log("십삼"*3);// "십삼" =>NaN * 3 => NaN
console.log(null*3); //Number(null) => 0
let x; //undefined 정의되지 않은 ***(모든 프로그램은 정의되지 않은 변수는 사용불가=>오류)
console.log(x); //정의하지 않은 오류인 상태 (없음이 아님)
console.log(Number(x));
function mutiple(...args){ //*args

}
