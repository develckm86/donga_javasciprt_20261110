//arr=[55,44,33,22,11]
let arr=[55,44,33,22,11]
console.log(arr[0],arr[1],arr[2]);
console.log(arr[-1]); //파이썬에서는 뒤에서 첫번재 js X
//console.log(arr[0:3]); //슬라이싱 불가능
console.log(arr[4]);
console.log(arr[5]); //파이썬에서 오류(대부분), 오류대신 undefined
let movies=["기생충","괴물","기생충","올드보이"];
console.log(movies[0],movies.at(0)); //at(index) == [index]
console.log(movies[-1],movies.at(-1)); //음수 인덱싱 가능
console.log(movies.includes("기생충"), movies.indexOf("기생충"));
console.log(movies.includes("겨울왕국"), movies.indexOf("겨울왕국"));
movies.push("데몬헌터스")
console.log(movies);
movies.pop()
movies.pop()
console.log(movies);




