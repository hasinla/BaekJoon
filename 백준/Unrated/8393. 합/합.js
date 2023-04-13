const input =  require('fs').readFileSync('dev/stdin').toString().split('\n');
let a = parseInt(input[0]);
let b = 0;


for(let i = 1; i <= a; i++){
    b += i
}

console.log(b);


