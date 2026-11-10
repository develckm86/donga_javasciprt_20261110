let age=17;
//성인(19) 고등학생(15) 중학생(12) 어린이(8) 아동 
let ageGroup=null;
if(age>=19){
    ageGroup="성인"
}else if(age>=15){ // elif age>=15 :
    ageGroup="고등학생"
}else if(age>=12){ // else :
    ageGroup="중학생"
}else if(age>=8){
    ageGroup="어린이"
}else{
    ageGroup="아동"
}

console.log(`당신은 ${ageGroup}입니다.`);

//if age>=19 : tab 들여쓰기=> 영역
//  print(f"{age}는 술을 살 수 있다.")

if (age>=19) { //scode 영역 {}
    console.log(age+"는 술을 살 수 있다.");
}else{
    console.log(`${age}는 술을 살 수 없다.`);
}

