//json 은 사전에 파싱여부를 파악할 수 없다???
let moiveJson=`{ "key" : True }`; //SyntaxError
try{
    let m=JSON.parse(moiveJson)
    console.log(m["key"]);
}catch(e){
    console.log(e.message);
}

const fs=require("node:fs"); //node에서 제공하는 도구 
let data=fs.readFileSync("movie.json","utf-8")
console.log(data);
try{
    data=fs.readFileSync("movie.json","utf-8") //Error
    console.log(data);
    let obj=JSON.parse(data); //SyntaxError
    console.log(obj);
}catch(e){
    console.log("오류 :",e);
}
