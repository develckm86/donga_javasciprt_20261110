const fs=require("node:fs");
//1. readFileSync 동기적으로 파일 불러오기 (파일이 커도 기다렸다가 동기적으로 실행)
let data=null;
data=fs.readFileSync("movie.json","utf-8");
console.log(data);

data=null;
fs.readFile("movie.json","utf-8",(err,text)=>{
    //console.log("콜백내부",text);
    data=text;
    //불러온 데이터 처리 장소!!
});
console.log(data);
//동기적 상상  : 순서대로 실행되었으니 log(data)에는 파일 데이터가 포함
