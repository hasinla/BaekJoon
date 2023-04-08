const input =  require('fs').readFileSync('/dev/stdin').toString().split(" "); //require 외부 모듈을 읽어옴 tostring() 문자열 받아오기 .split(" ") 한칸 띄어쓰기로 구분 .split("\ n") 줄바꿈으로 구분
let a = parseInt(input[0]);                                                     // 
let b = parseInt(input[1]);

if(a == b){
   console.log("==");
}
else if( a < b){
    console.log("<");
}
else if( a > b){
    console.log(">");
}