const input =  require('fs').readFileSync('dev/stdin').toString().split('\n');
let a =parseInt(input[0]);

for(let i =1; i <= a; i++){
    let b1= parseInt(input[i].split(' ')[0]);
    let b2= parseInt(input[i].split(' ')[1]);
    console.log(`Case #${i}: ${b1+b2}`);
   }
