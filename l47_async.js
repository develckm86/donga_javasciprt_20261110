// 오래 걸리는 일은 js가 비동기함수로 만들어 놓음 (WEB APIs)
// 오래 걸리는 일은 모두 콜백함수가 동작
//fetch, setTimeout, setInterval, fs.readFile ....

//setTimeout(()=>{console.log("안녕!!");},1000);
console.log("첫번째");
console.log("두번째");
console.log("세번째");
//순서대로 출력된다 => log가 동기적으로 실행되고 있다.
let a=10;
let b=20;
console.log(a+b);//코드가 순서대로 실행되기 때문에 30

console.log("========================================");
console.log("첫번째");
setTimeout(()=>{console.log("두번째");},5000)
console.log("세번째");
//동기적이면 : 첫번째=>5초뒤 두번째 => 세번째
//비동기적이면 : 첫번째 => 두번째 일을 맡기고 => 세번째 => 5초 뒤에 두번째가 실행

console.log("=======================================");
let msg=null;

setTimeout(()=>{
    msg="안녕!!";
},0);

console.log("msg :",msg);



