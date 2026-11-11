let nums=[10,20,30];//눈에 보이는 대로 표기함(리터럴 표기법)
console.log(typeof nums); //typeof 기본형(number,string,boolean)을 제외하고 전부 object 
//모든객체는 형이 존재
console.log(nums instanceof Array); //해당 객체의 타입은 Array이다.
nums=new Array(); //[] 배열은 객체이고, 객체는 속성과 함수로 이루어짐
nums.push(100);
nums.push(200);
nums.push(300);
console.log(nums,nums.length);
//Array에는 내부반복문이 존재함 : 콜백함수를 요소마다 반복 실행하는 함수
nums.forEach((n,i,arr)=>{
    console.log(n,i,arr);
});
// forEach,map,filter,reduce,find ....

//외부반복문 for
let sum=0;
for(n of nums){
    sum+=n
}
console.log(sum);
nums=[33,-22,-1,55,-100]
//map 기존의 배열을 다른 배열로 바꾸고 싶을때 사용
let newNums=nums.map((value,i,arr)=>{return value*2;})
console.log(nums);
console.log(newNums);
//filter 조건으로 조건에 만족하는 요소만 새로운 배열에 남길때 사용
newNums=nums.filter((v,i,arr) =>{return v < 0; })
console.log(newNums);

console.log(nums);
//reduce 한개의 결과로 줄임  (value,index,arr)
let result=nums.reduce((v1,v2)=>{
    console.log(v1,v2);
    return v1+v2;
},0)
console.log(result);

result=[10,20,30,40,50,60,70,80,90,100].reduce((v1,v2)=>v1+v2, 0)

console.log(result);


console.log(nums);
//nums.sort() //기존의 배열을 문자로 정렬
nums.sort((v1,v2)=>v1-v2); // 오름차순 asc 정렬
console.log(nums);
nums.sort((v1,v2)=>v2-v1);// 내림차순 desc 정렬
console.log(nums);




