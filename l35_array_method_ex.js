function Movie(t,y,d,a){//type 으로 함수 작성시 파스칼규칙
    this.title=t;
    this.year=y;
    this.director=d;
    this.audience=a;
}
console.log(new Movie("경민코딩",2026,"최경민",20000000));


const movies=[
    {title:"기생충",year:2019,director:"봉준호",audience:17610000},
    new Movie("엔드게임",2019,"루소",13970000),
    new Movie("부산행",2016,"연상호",11570000),
    new Movie("아바타",2009,"카메론",13620000)
];

console.log(movies);
for (m of movies){
    console.log(m.title);
}
movies.forEach((m,i)=>{
    console.log(i,m.title);
})
//["부산행 (2016) 연상호","아바타 (2009) 카메론", ...]
let newMovies=movies.map((m,i)=>`${m.title} (${m.year}) ${m.director}`);
console.log(newMovies);
//개봉년도가 2018년 이상인 영화만 남기세요!
newMovies=movies.filter( m => m.year>=2018 );
console.log(newMovies);
//누적관객수가 15000000 이상인 영화만 남기세요!
newMovies=movies.filter(  m=>m.audience>15000000);
console.log(newMovies);

//reduce 모든 영화의 누적관객수를 구하세요
let sumAdience=movies.reduce((sum,m)=>sum+m.audience, 0 )
console.log("총누적관객수:",sumAdience);

