const input =  require('fs').readFileSync('dev/stdin').toString().split('\n');
let a = parseInt(input[0]);



for (let i = 1; i < 10; i++) {
    console.log(`${a} * ${i} = ${a * i}`);
}


