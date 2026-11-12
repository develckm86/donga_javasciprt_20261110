let a; //변수
//기본형(원시형) 데이터(무조건 리터럴하게 표기)
a=13.13;
a="문자열";
a=true; a=false;
//기본형 : 


//자료형 데이터 (리터럴하게 표기하는 것을 지원)

a={key:"value", obj:{obj2:{obj3:{a:10,b:20}}}} //Object (js object 리터럴 표기법이 너무 좋아서 json을 만들어서 통신에 사용)
a=[11,22,33,44,55] //Array
//데이터를 리터럴하게 표기

//Object  
a=new Object(); //{}
a.name="둘리";
a["age"]=19;
console.log(a);
//a={ name: '둘리', age: 19 }
a=new Array(5); //[ null,null,null,null,null] ==[ <5 empty items> ]
console.log(a);
a[0]="사과";
a[1]="딸기";
a[2]="밤";
a[3]="망고";
//a.4="배";
a[4]="배"
console.log(a); //[ '사과', '딸기', '밤', '망고', '배' ]
//let 1name="길동";
//let name-1="길동";

// ; 세미콜론 마침 
let c=20
let d=30 //세미콜론 생략시 엔진이 자동으로 생성
c=50; d=70; c=80; console.log(a,c,d); console.log(d);
c=40
c=70
//라인개행이 코드의 종료를 표현하는 파이썬은 세미콜론을 생략


//함수 : 기능의 집합 (복잡한 기능을 반복해서 사용할때 함수 사용 시 재사용 용이)
const movies=[
    { title: '기생충', year: 2019, director: '봉준호', audience: 17617234 },
    { title: '엔드게임', year: 2019, director: '루소',audience: 13973456},
    { title: '부산행', year: 2016, director: '연상호',audience: 1157000}, 
    { title: '아바타', year: 2009, director: '카메론', audience: 13620000},
    { title: '얼음별대모험', year: 1996, director: '유승덕', audience: 353456}
]

//Math : 수학적 연산을 돕는다. 
//ceil(올림), floor(내림) -1.1 => -2 ,round(반올림), trunc(버림)
//0번째 영화 카드
let m=movies[0];
console.log(`영화 : ${m.title}`);
console.log(`개봉년도: ${m.year},  감독: ${m.director}`);
console.log(`누적관객수 : ${ Math.round(  m.audience/10000 ) }만`);
if(m.audience>=10000000){
    console.log("천만돌파!!!");
}else if(m.audience>=1000000){
    console.log("백만돌파!");
}
console.log("");

//카드 2개를 더 만들어보기
m=movies[1];
console.log(`영화 : ${m.title}`);
console.log(`개봉년도: ${m.year},  감독: ${m.director}`);
console.log(`누적관객수 : ${ Math.round(  m.audience/10000 ) }만`);
if(m.audience>=10000000){
    console.log("천만돌파!!!");
}else if(m.audience>=1000000){
    console.log("백만돌파!");
}
console.log("");

function movieCard(m){
    console.log("=============영화카드============");
    console.log(`영화 : ${m.title}`);
    console.log(`개봉년도: ${m.year},  감독: ${m.director}`);
    console.log(`누적관객수 : ${ Math.round(  m.audience/10000 ) }만`);
    if(m.audience>=10000000){
        console.log("천만돌파!!!");
    }else if(m.audience>=1000000){
        console.log("백만돌파!");
    }
    console.log("================================\n");
}
// movieCard(movies[0])
// movieCard(movies[1])
// movieCard(movies[2])
// movieCard(movies[3])
// movieCard(movies[4])
// 반복문으로 영화 카드를 출력하세요 (forof, index for, 내부반복문)

//for(let i =movies.length-1; i>=0; i--){ movieCard(movies[i]); }

//for(movie of movies){movieCard(movie)}

//Array의 내부 반복문, forEach((v,i,arr)=>{}), filter((v,i,arr)=>boolean), map, reduce, find, sort ...
//movies.forEach(function(m){console.log(m);});
//movies.forEach(movieCard)
//문제 1) forof 로 누적관객수가 1300만 이상인 영화만 리스트로 만드세요
/*
let newMovies=[];
for( let m of movies){
    if(m.audience>=13000000){
        newMovies.push(m)
    }
}
console.log(newMovies);
*/


//문제 2) Array.filter 로 누적관객수가 1300만 이상인 영화만 리스트로 만드세요
//console.log(movies);
newMovies=movies.filter((v,i,arr)=>v.audience>=13000000); //function(v,i,arr){return true}
console.log(newMovies);

//문제3) for of 로  audience: 17617234 를 => audience: "1761만" 으로 바꿔서 새배열로 만드세요.
//문제4) Array.map 로  audience: 17617234 를 => audience: "1761만" 으로 바꿔서 새배열로 만드세요.
newMovies=[];

newMovies=movies.map((v,i,arr)=>{return {...v,director:"경민"}})
console.log(newMovies);


//스프레드 문법!! 

//1) ...args 복제
let arr=[1,2,3,4,5,6]
let newArr=[0,...arr,7] // python [0,*arr,7] 언팩킹
console.log(newArr);

let obj={a:10,b:20,c:30};
let newObj={...obj,d:40,e:50,c:3000}; //{**obj}  
console.log(obj, newObj);

//2)변수로 받기
let [x,y,...z]=[100,200,300,400];//구조분해할당 python  x,y=[100,200,300]
console.log(x,y,z);
let {name, age}={name:"루피", age:8}
console.log(name,age);

//3)매개변수로 받기
function multi(...args){ //args 배열로 받는다
    return args.reduce( (prev,next)=>prev*next );
}
console.log(multi(3,4,5));
console.log(multi(4,5,6,7));
console.log(multi(7,8,9,10,11));

function say(user){
    return `${user.name}(${user.age})님 안녕하세요`;
}
let str=say({name:"크롱",age:6, isStudent:false, gender:"male"});
console.log(str);

function say2({name,age,...user}){//구조분해 할당 (React)
    console.log(user);
    return `구조분해 ${name}(${age})님 안녕`;
}
str=say2({name:"크롱",age:6, isStudent:false, gender:"male"});
console.log(str);






