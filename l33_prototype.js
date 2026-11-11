//js 프로토타입(시제품 언어),함수형언어(함수가객체)
//js의 함수는 2가지 기능이 있다. 함수, 타입
function a(){
    //console.log("안녕!");
    this.x=10;
    this.y=20; //객체의 속성 추가
    return 3.145
}
a(); //함수로 사용됨 (return을 받는다)
new a(); //타입으로 사용되어서 => 객체를 생성 {object}(return을 무시)

console.log(a());
console.log(new a());
console.log(new a());
console.log(new a().__proto__); //객체의 시제품을 보는 법(__proto__ 부모 시제품을 참조)

const sum=(a,b) => a+b; //함수가 타입도 되고 함수도 되는 것은 불편해서 나온것 화살표 함수(오직함수만 되겠다)

//new sum()
console.log(sum(123,345));


class User{} //오직 타입만되는 것
//타입 : 객체의 형태 
//프로토타입 : 타입을 기반으로 객체를 만들기 전에 미리 만들어놓은 시제품

