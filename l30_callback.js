let arr=["경민","둘리","길동","하츄핑"];

//배열을 반복탐색 index,iterator
//내부반복(iterator)

arr.forEach(function(name,i){ //요소마다 호출 실행되는 콜백함수 (이름이 없는함수,익명함수)
    console.log(name,i);
})
function arrHandler(n,i,arr){
    console.log("arrHandler",i,n);
}
arr.forEach(arrHandler); //함수를 전달-> 함수형언어,일급함수