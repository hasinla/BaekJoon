const input =  require('fs').readFileSync('dev/stdin').toString().split('\n');
let a =parseInt(input[0]);
let b3 = '';
for(let i =1; i <= a; i++){
   let b1= parseInt(input[i].split(' ')[0]);
   let b2= parseInt(input[i].split(' ')[1]);
    b3 += b1 + b2 + '\n';
}

console.log(b3);