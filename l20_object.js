const movie={
    name :"왕사남",
    "감독" : "장항준",
    '개봉일' : 20260204
}
console.log(movie);
console.log(movie["name"]);
//console.log(movie[name]);
console.log(movie.name); // . 하위 참조자(속성,함수)
//js 는 key를 속성으로 취급
//객체에 속성 추가
movie["a"]=10;
movie.b=true;
console.log(movie);
//객체의 속성 삭제
delete movie["b"]
delete movie.a
console.log(movie);

const obj={a:100, b:200, c:true, c: false, c: "안녕"} //key는 오직 한개
const obj2={c:300, d:400}
console.log(obj);
//Object  : {} 를 보조해주는 타입
Object.assign(obj, obj2)
console.log(obj);
// key : 객체에서 유일한 식별자(id) == Set

