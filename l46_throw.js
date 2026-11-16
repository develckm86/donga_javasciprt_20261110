function multi (a, b){
    //a,b 가 수일때만 multi를 실행, 아니면 오류!!
    //typeof 10 => "number", typeof "10" => "string" 
    //if(typeof a!=="number" || typeof b !== "number") throw new Error("오류다!!!");
    //둘중에 하나라도 수가 아니면 Error => 둘다 수인 것이 아니면 TypeError 발생
    //if( !(typeof a==="number" && typeof b==="number") ) throw TypeError("a와 b 는 수")
    if(isNaN(a) || isNaN(b)) throw TypeError("a와 b는 수로만 작성")
    return a*b;
}
try{
    let r=multi(10,"11")
    console.log(r);
    r=multi(20,"삼십")
    console.log(r);
}catch (e){
    console.log(e.message);
    
}


//함수의 종료 => return 시, 예외 발생!!
function grade(score){
    //score 수가 아니면 Error("수만 입력")
    //score 0~100이 아니면 Error("0~100 사이만 입력")
    if(isNaN(score)) throw new TypeError("수만입력");
    score=Number(score);
    if( !(score>=0 && score<=100) ) throw new RangeError("성적은 0~100 사이")
    return (score>=50)? "통과" : "재시험";
}

//console.log("100",grade("100")); 
//console.log("1000",grade("1000")); 

//throw 예외위임 

try{
    console.log(grade(77));
    console.log(grade(44));
    console.log(grade(200));
    console.log(grade(-200));
}catch(e){
    console.log(e);
    
}



