//l52_gemini_api.js
process.loadEnvFile(); // 현재 폴더의 .env를 읽음
const GEMINI_KEY=process.env.GEMINI_KEY
const BASE = "https://generativelanguage.googleapis.com/v1beta/models";
const MODEL = "gemini-3.5-flash-lite";
async function askGemini(prompt){
    let url=`${BASE}/${MODEL}:generateContent`;
    //url?a=10&b=20  쿼리스트링으로 데이터 전송하는 방식은 GET, POST => 데이터를 숨겨보내는 방식
    const res=await fetch(url,{
        method:"POST",
        headers:{ 
            "Content-Type" : "application/json",
            "x-goog-api-key" : GEMINI_KEY
        },
        body :JSON.stringify({contents:[{  parts : [ {text: prompt} ] }] })
    });
    console.log(res.status);
    const data= await res.json();
    console.log(data["candidates"][0]["content"]["parts"][0]["text"]);
}
askGemini("슈레딩거의 고양이는 무엇을 의미해?")


