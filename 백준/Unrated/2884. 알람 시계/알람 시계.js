const input =  require('fs').readFileSync('dev/stdin').toString().trim().split(" ");
let a = parseInt(input[0]);  //시간                                                
let b = parseInt(input[1]);  //분


if( b - 45 < 0){ // b가 45보다 작으면 a에서 1을 뺀다 추가로 b을 구하기 위해 1시간(60)에서 45를 값을 뺀 값에 b를 더한다
        a -= 1;
        b = (60 + b) -45; 
}
else if( b > 45){ // b가 45보다 크면 45빼기
    b -= 45; 
}
else if ( b === 45){ // b가 45면 그냥 45
    b = 0;
}

if( a < 0){ // 24(0)에서 1을 뺏을 때 음수이면 23으로 바꾼다
    a = 23;
}


console.log(a,b);