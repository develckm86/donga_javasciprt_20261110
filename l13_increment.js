let n=0;

console.log(n+1); //1
console.log(n); //0
//나 자신이 바뀌려면 대입 연산자를 사용해야함
n=n+1;
n=n+1;
n+=1;
n+=2;
n*=3
console.log(n);
//1을 증가대입하는 연산을 가장 많이 사용 => ++
console.log(++n);
console.log(n);
--n; // n=n-1, n-=1
console.log(n);
//while
let i=10; //10 9 8 .... 1 종료
while(i>0){
    console.log(i);
    i--;
}
console.log("종료");
i=0;
//1 2 3 4~ 8 9 10 종료
while (i<10){
    ++i;
    console.log(i);
}




