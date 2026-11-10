//배열 객체를 사용할때 변수보다 상수를 선호(배열 변경은 불가하지만 요소는 변경 가능)
let nums=[10,11,12];
nums=13;
nums="333";
nums=false;
//console.log(nums[0], nums[1], nums.push(13));
console.log(nums);

const movies=["와사남","군체","타짜4","마도카"];
//movies=13;
console.log("영화이름:" + movies[0]);
console.log("영화이름:" + movies[1]);
console.log("영화이름:" + movies[2]);
console.log("영화이름:" + movies[3]);
//배열을 인덱스로 참조할 수 있지만 비효율 -> 배열 반복 탐색
console.log(movies.length);
//배열의 인덱스 기반 반복탐색
for(let i=0; i<movies.length; i++){
    console.log("영화 : " + movies[i]);
}
//for i in range(0,len(movies)) :
//    pinrt(f"영화 {movies[i]}")

//요즘 잘 사용하지 않음! (반복자 iterator)
//iterator iterable 반복문
//for m in movies : #파이썬
for (m of movies){
    console.log(`영화 이름은 ${m} 입니다`);
}
