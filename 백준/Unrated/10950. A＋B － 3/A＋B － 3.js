const input =  require('fs').readFileSync('dev/stdin').toString().split('\n');
let t = parseInt(input[0]);




for(let i = 1; i <= t ; i++){
    let a = parseInt(input[i].split(' ')[0]);
let b = parseInt(input[i].split(' ')[1]);
    console.log(a + b);
}


