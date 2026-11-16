//l51_promise.js
//영화목록 파일을 읽고 => kobis에서 영화목록의 상세를 조회 => 파일저장
//setTimeout(()=>{},1000)=> setTimeout(()=>{},3000) => setTimeout(()=>{},2000)

setTimeout(()=>{
    //...파일읽는중...
    let movies=["인샙션","기생충"];
    setTimeout((res)=>{
        console.log(movies);
        //movise kobis api로 상세조회중  ....
        let movieJosn=[{title:"인샙션",감독:"길동"},{title:"기생충",감독:"둘리"}];
        setTimeout(()=>{
            console.log(movieJosn);
            //파일저장 성공
        },2000)
    },3000);
},1000)

//setTimeout(()=>{
    //...movies 영화 조회 ?? =>불가능
//},3000)
process.loadEnvFile(); // 현재 폴더의 .env를 읽음
const KOBIS_KEY=process.env.KOBIS_KEY

const fs=require("node:fs")
fs.readFile("movies.json","utf-8",(error,text)=>{
    console.log(text);
    let movieCds=JSON.parse(text);
    for(let code of movieCds){
        console.log(code);
        let url=`http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=${KOBIS_KEY}&movieCd=`+code;
        fetch(url)
            .then((res)=>res.json())
            .then((movie)=>{
                //movie_20183782.json
                fs.writeFile(`movie_${code}.json`,JSON.stringify(movie),"utf-8",(err)=>{
                    if(!err) console.log("저장성공");
                });
            })
    }    
});


const fs2=require("node:fs/promises");
async function loadMovies(){
    let movieCds=await fs2.readFile("movies.json","utf-8");
    console.log("loadMovies",movieCds);
    movieCds=JSON.parse(movieCds);
    for(let code of movieCds){
        let url=`http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=${KOBIS_KEY}&movieCd=`+code;
        let res=await fetch(url);
        let err=await fs2.writeFile("movie2_"+code+".json",data,"utf-8")
        let data=await res.text();
        if(!err) console.log("movie2 저장성공");
    }
}
loadMovies()














