const fs=require("node:fs"); //node에서 라이브러리 요청
let fileName="movie_list_2020_2026.json"
let json=fs.readFileSync(fileName,"utf-8")
console.log(typeof json);
let movies=JSON.parse(json)["movieList"]
//console.log(movies[0]);
//"2025"년 개봉한 "한국" 영화중에 "가족,드라마" 만 조회하세요!

let newMovies=movies
    .filter((m)=>m.prdtYear==='2025' && m.nationAlt==="한국" && m.genreAlt==="가족,드라마")
console.log(newMovies);

