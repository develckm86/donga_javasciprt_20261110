function print(name){
    console.log(`${name}님 안녕하세요!`);
}
//함수를 값처럼 다루기 (전달하기)
//print("경민") //함수 실행
console.log(print); //[Function: print]
let a = print;//함수를 변수에게 전달해서 변수로 실행! (함수형언어)
a("경만");
a("둘리");

function method( func ){
    console.log("method 에서 함수를 대신 실행");
    func("메소드"); //전달받은 함수를 대신 실행=> callback 함수
}

method(print);

