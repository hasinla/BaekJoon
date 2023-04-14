const input =  require('fs').readFileSync('dev/stdin').toString().split('\n');
let a =parseInt(input[0]);
let b = '*';
let b1 = " ";


for(let i =1; i <= a ; i++){
    console.log(b1.repeat(a -i)+b.repeat(i));
}

// 역순 별 찍기  a = 5 i = 1이라 가정 
//    * 공백 4번 * 한개 a - i 4
//   ** 공백 3번 * 두개 a - i 3
//  *** 공백 2번 * 세개 a - i 2
// **** 공백 1번 * 네개 a - i 1
//***** 공백 없음 * 다섯개 a- i 0
// 공백이 늘어난 만큼 *이 늘어남 