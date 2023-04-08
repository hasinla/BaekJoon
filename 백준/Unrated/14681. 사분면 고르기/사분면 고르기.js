const input =  require('fs').readFileSync(0).toString().split("\n"); 
//평소에는 테스트 케이스 파일이 존재하는 '/dev/stdin' 경로로 readFileSync Path 값을 넘겨주었지만, 14681번 문제에서는 fs모듈 런타임 에러가 발생합니다.
//ㅅㅄㅄㅄㅄㅂ

let a = parseInt(input[0]);                                                     
let b = parseInt(input[1]);


if( a > 0) b > 0? console.log(1) : console.log(4) //삼항연산 사용
if( a < 0) b > 0? console.log(2) : console.log(3)
