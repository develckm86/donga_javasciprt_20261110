//함수 (method,function)
function sum(a,b){ //def sum (a,b):
    let result=a+b;
    return result;
    console.log("안녕"); //return시 함수 종료
}//함수를 정의해도 실행되지 않음!
console.log(sum(100,1000));

function say(name){
    console.log(`안녕하세요~ 저는 ${name}입니다`);
}
say("둘리");
say("하츄핑");
let result=say("뽀로로");
console.log(result); //return 없는 함수는 undefined를 반환

//이름,나이 를 보내면 객체를 반환하는 함수
function user(name,age){
    return {
        "name":name,
        "age":age
    }
}
const u1=user("뽀로로",20);
const u2=user("하츄핑",15);
console.log(u1,u2);
