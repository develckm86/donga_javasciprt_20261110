//전역 
let a=10; //전역변수
{//scope //지역
    let b=100; //지역변수 : 해당하는 지역과 자식지역에서 접근가능
    if(a>=10){//자식지역
        let c=1000
        console.log("자식지역:",a,b);
    }
    console.log("지역: ",a,b,c);
}
console.log(b); // b is not defined error
