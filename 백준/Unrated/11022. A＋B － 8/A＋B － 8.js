const input =  require('fs').readFileSync('dev/stdin').toString().split('\n');
let a =parseInt(input[0]);

for(let i =1; i <= a; i++){
    let b1= parseInt(input[i].split(' ')[0]);
    let b2= parseInt(input[i].split(' ')[1]);
    console.log(`Case #${i}: ${b1} + ${b2} = ${b1+b2}`);
   }

//첫째 줄에 테스트 케이스의 개수 T가 주어진다.

//각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)