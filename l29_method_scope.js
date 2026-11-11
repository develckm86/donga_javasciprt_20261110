let a=10;
function method(){//함수는 호출할때까지 존재하지 않는 설계
    let b=20;//함수의 지역변수
    console.log(a,b);
}
//console.log(b); //함수가 실행될때 내부에서만 존재하는 지역변수
method(); //함수를 실행할때 지역변수 b가 생성
method();
method();

