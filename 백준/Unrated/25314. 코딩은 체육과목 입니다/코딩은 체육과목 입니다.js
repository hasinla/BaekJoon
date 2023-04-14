const input =  require('fs').readFileSync('dev/stdin').toString().split('\n');
let n = parseInt(input[0]/4);
let long = "long ";


console.log(`${long.repeat(n)}int`);
