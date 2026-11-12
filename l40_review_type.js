//type : 자료형 data의 형 
console.log( [1,2,3] instanceof Array);
//[]배열의 타입은 Array다
console.log( typeof 12.3 ); //number 기본형data의 타입
//type == class
class User{ //type: 속성과 기능(함수)으로 이루어짐
    constructor(n,a=0){
        this.name=n;
        this.age=a;
    }
    say(){
        console.log(`${this.name}이 말을 한다~`);
    }
}
let u =new User("길동",30)
console.log(u); //User {}
console.log(u instanceof User);
u.say()

/*
class Users :
    def __init__(self,n,a) :
        self.name=n
        self.age=a
    def say(self)  :
        print(self.name+"이 말한다~")  

u=Users("길똥",20); //{name:"길똥",age:20}
u.say()
*/


//function sum(){}
function Student(name,score=0){ //js는 함수형언어는 함수가 타입이된다.
    this.name=name;
    this.score=score;
    return 10;//타입으로 사용될때는 리턴은 무시
}
let s=new Student("뽀로로",30);
console.log(s);
console.log(s.__proto__); //나는 누구(시제품)를 기반으로 만들어졌어?
console.log(Student.prototype);
console.log(s.__proto__ === Student.prototype);
//시제품을 기반으로 객체를 만드는 언어를 프로토타입언어
//시제품 없이 class를 기반으로 객체를 만드는 언어를 객체지향 언어

// 자바스크립트는 ???
// 함수형언어 : 함수가 타입, 함수를 변수가 참조하거나 콜백함수로 사용가능
// 프로토타입언어 : 객체를 만들기 전에 시제품을 만들어 놓는 언어
// 인터프리터언어 : 코드를 컴파일 없이 문자열 그대로 실행하는 엔진
const f=function(){} //프로토타입생성(this) 
const test=()=>{} //타입없이 오직 함수 (this x)
