const input =  require('fs').readFileSync('/dev/stdin').toString().split(" "); //require 외부 모듈을 읽어옴 tostring() 문자열 받아오기 .split(" ") 한칸 띄어쓰기로 구분 .split("\ n") 줄바꿈으로 구분
let a = parseInt(input[0]);                                                     // 

if( a >= 90){
    console.log("A");
}
else if( a >= 80){
    console.log("B");
}
else if( a >= 70){
    console.log("C");
}
else if( a >= 60){
    console.log("D");
}
else{
    console.log("F");
}

//두 정수 A와 B가 주어졌을 때, A와 B를 비교하는 프로그램을 작성하시오.