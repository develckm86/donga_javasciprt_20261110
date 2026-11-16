//l50_fetch_async.js
//async await =>Promise로 작성된 
// 비동기 함수를 동기적으로 변경가능

async function fetchOpenMeteo(){
    let url="https://api.open-meteo.com/v1/forecast?latitude=37.566&longitude=126.9784&current=rain,temperature_2m&timezone=Asia%2FTokyo&forecast_days=1"
    let res=await fetch(url);
    let data=await res.json();
    console.log(data["current"]["time"],data["current"]["temperature_2m"]);
}
fetchOpenMeteo()