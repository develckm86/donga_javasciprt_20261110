//json vs object
//json : 문자열로된 객체정보 (객체명세서)
//JavaScript Object Notation (자바스크립트에서 사용하는 객체 표기법)

//object: 속성과 함수로 되어 있는 데이터, 프로그램의 데이터

let userJson=`{
    "name":"경민",
    "age":40
}`;//함수는 작성불가
console.log(userJson["name"]); //json 은 문자열이라 객체참조가 불가능

const userObj={
    name:"최경만",
    age:120,
    say:function(){
        console.log("안녕하세요~");
    }
}
console.log(userObj["name"]);
userObj.say()


//json 
//1.거의 모든 통신은 문자열
//2.구조적인 데이터를 문자열로 전달할 방법(json,엑셀,csv,xml,html)

console.log(typeof userJson);
console.log(typeof userObj);

//파이썬과 js는 문자열 json을 객체나 dict로 변환하는 함수를 제공

const user=JSON.parse(userJson);
console.log(user);
console.log(user.name, user.age);

const s=JSON.stringify(userObj);// json 은 데이터 정보만 전송하기 때문에 기능(함수)삭제
console.log(s, s.name);




