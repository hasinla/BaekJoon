const fs = require('fs'); 
const input = fs.readFileSync('/dev/stdin').toString().split();//입력 값을 받아옴

console.log( input - '543');