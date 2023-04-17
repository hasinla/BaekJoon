const input =  require('fs').readFileSync('dev/stdin').toString().split('\n');
let a = input[0];
let b = input[1].split(" ");
let c = input[2];
let d = 0;


   for(let i =0; i <= a-1; i++){
      //console.log(b[i]);   
      if( c == b[i]){
         //console.log("777");
         d++;
      }
   }
   console.log(d);
   
   



   // 11 예제
   // 1 4 1 2 4 2 4 2 3 4 4
   // 2

   //첫째 줄에 정수의 개수 N(1 ≤ N ≤ 100)이 주어진다. 입력
   //둘째 줄에는 정수가 공백으로 구분되어져있다.  
   //셋째 줄에는 찾으려고 하는 정수 v가 주어진다.
   //입력으로 주어지는 정수와 v는 -100보다 크거나 같으며, 100보다 작거나 같다.

   //첫째 줄에 입력으로 주어진 N개의 정수 중에 v가 몇 개인지 출력한다. 출력

