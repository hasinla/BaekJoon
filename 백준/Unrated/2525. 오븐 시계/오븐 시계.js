const input =  require('fs').readFileSync('dev/stdin').toString().split('\n');
let a = parseInt(input[0].split(' ')[0]); //시간 구분을 위해 split(' ') 추가
let b = parseInt(input[0].split(' ')[1]); //분
let c = parseInt(input[1]); //조리시간


h = Math.floor((a * 60 + b + c) / 60);
m = (a * 60 + b + c) % 60;
if(h>=24) {
    h -= 24;
}

console.log(h, m)




