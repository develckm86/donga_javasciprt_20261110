console.log('안녕 노드js');

//실행법
//1. 터미널을 실행후 node 파일명
//2. 파이썬 처럼 재생버튼 누르는 법 : 확장프로그램 Code Runner 설치
//3. nodemon js 도구를 설치 (live server 처럼 계속 실행되어 있음->변경되면 새로고침)


//변수 만드는 법(선언) 
let a=10; //10 데이터를 재사용할건데 변수 a에 담아서 쓸거야
console.log(a);
console.log(a+1);
a=100; //변수 : 다른 데이터로 변경할 수 있는 그릇
console.log(a); 
//let a=1000; //선언한 변수를 다시 만들수 없다! 오류 Identifier 'a' has already been declared

//상수 : 데이터를 바꾸지않고 계속 사용
const PI=3.14;
//PI=3.33; //TypeError : Assignment to constant variable.
console.log(2*2*PI);



