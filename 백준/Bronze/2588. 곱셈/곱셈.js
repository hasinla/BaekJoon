const fs = require('fs');
const [a,b] = fs.readFileSync('/dev/stdin').toString().split('\n'); //입력 값을 받아옴 // /dev/stdin

const first = b%10; // 1자리를 구함
const second = Math.floor((b % 100)/10); // 10의 자리를 구함
const third = Math.floor(b / 100); // 100의 자리를 구함

console.log(a*first); //(3)
console.log(a*second); //(4)
console.log(a*third); //(5)
console.log(a*b); //(6)
