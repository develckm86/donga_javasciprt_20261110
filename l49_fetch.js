//l49_fetch.js
// let url=`https://api.open-meteo.com/v1/forecast
// ?latitude=37.566
// &longitude=126.9784
// &current=rain,temperature_2m
// &timezone=Asia%2FTokyo
// &forecast_days=1`;
let url="https://api.open-meteo.com/v1/forecast?latitude=37.566&longitude=126.9784&current=rain,temperature_2m&timezone=Asia%2FTokyo&forecast_days=1"
//fetch 비동기적으로 통신
let text=null;

fetch(url)
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data["current"]["time"], data.current.temperature_2m);
        text=data;
    });
//then => Promise (비동기적으로 실행되는 코드의 특정 시점을 동기화)
console.log(text);
