const fs = require('fs'); 
const input = fs.readFileSync("/dev/stdin").toString().split(" ");//입력 값을 받아옴


const A = parseInt(input[0]); // 변수 A 선언
const B = parseInt(input[1]); // 변수 B 선언

console.log(A + B ); // 출력
console.log(A - B ); // 출력
console.log(A * B ); // 출력
console.log(Math.floor(A / B) ); // 출력
console.log(A % B ); // 출력