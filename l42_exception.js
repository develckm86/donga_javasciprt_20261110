let arr=[10,11,12];
console.log(arr[0],arr[1],arr[2]);
console.log(arr[3]); //undefined 오류대신 상태
arr=null;
//console.log(arr[1]); //TypeError: Cannot read properties of null (reading '1')
arr=[{name:"겨울왕국",genre:["애니","가족"]},{name:"기생충",genre:null}]

try{
    console.log(arr[0]["genre"][0],arr[0]["genre"][1]);
    console.log(arr[1]["genre"][0],arr[1]["genre"][1]);
}catch(e){
    console.log(e.message);
}
console.log("프로그램 종료시 실행안되는 코드 ㅠㅠ");

//대부분 예외는 막을 수 있는 예외(사전예방 if )와 막지 못하는 예외(try만가능)가 있다.
g=arr[1]["genre"];
if(g instanceof Array){
    console.log(g[1],g[2]);
}else{
    console.log("장르가 없습니다.(null)");
}




