let temp=18;
//온도 temp 28 이상이면 반팔//20 이상이면 긴팔//10 이상이면 겉옷//나머지는 패딩
//else if로 온도에 따른 안내를 만드세요!
let clothes=null;
if(temp<10){
    clothes="패딩";
}else if(temp<20){
    clothes="겉옷";
}else if(temp<28){
    clothes="긴팔";
}else{
    clothes="반팔"
}
/* 여러줄 주석
if(temp>=28){
    clothes="반팔";
}else if(temp>=20){
    clothes="긴팔";
}else if(temp>=10){
    clothes="겉옷";
}else{
    clothes="패딩"
}
*/
console.log(`오늘의 온도는 ${temp}입니다. ${clothes}을 입으세요!`);



//영화관
let age=16;
let withParent=false;

if( (age>=15 && age<=18) && withParent ){
    console.log("청소년(15~18)은 부모 동반시 입장 가능!");
}
