const item={ title:"노트북",price:"5000000"}
const spec={ ram : "64GB", ssd : "1TB"}
//Object.assign(item,spec)
// ... (스프레드 문법 : 펴바르다, 복사 clone)
const item2={ ...item, ...spec } //assign 은 기존 객체에 복사, ...는 새로운 객체 생성
console.log(item2);

const arr=[10,20,30,40]
const arr2=[-10,0,...arr,50,60]
console.log(arr2);

const user={
    name:"경민",
    age :40
}
console.log(user.name);
console.log(user["age"]);
//구조분해할당
let {name, age}= user;
console.log(name,age);

let [a,b,c,...rest]=[11,22,33,44,55,66]
console.log(a,b,c,rest);


console.log(user);
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user)); //[ [ 'key', value ], [ 'age', 40 ] ]
//user.items()
//객체에 key가 있을때까지 반복 실행
for (let key in user){
    console.log(key,user[key]);
}
console.log("====entry 를 이용한 객체 반복문====");
for( let [k,v] of Object.entries(user)){
    console.log(k, v);
}



