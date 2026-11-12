a();
//함수 정의 1
function a(){
    console.log("안녕 a()");
}
a();
//console.log(x);
let x=10;
console.log(x);

//b() //ReferenceError: Cannot access 'b' before initialization
//함수정의 2 : 익명함수를 상수가 참조 (호이스팅현상을 막는다)
const b=function(){ 
    console.log("안녕 b()입니다.");
}
b()

//함수정의 3 : 화살표 함수
const c=()=>{
    console.log("안녕 화살표 c()입니다.");
}
c();

let sum=(a,b)=>{return a+b};
sum=(a,b)=>a+b; //파이썬 lambda a,b: a+b


let arr=["길동","갈동","길둥","동동","아따","맘마"]
arr.forEach(function(){})
arr.forEach((v,i)=>{console.log(i,v,"님 안녕~");});

let scores=[10,90,80,30,60];
let newScores=scores.map((v)=>({
        scores: v, 
        state: (v>=50) ? "통과" : "재시험"
    }));
console.log(newScores);



