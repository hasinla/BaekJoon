const input =  require('fs').readFileSync('dev/stdin').toString().split('\n');
let a =parseInt(input[0]);
let b= '';


for(let i =1; i <= a; i++){    
        b += '*';
        console.log(b);
    }
   
 
