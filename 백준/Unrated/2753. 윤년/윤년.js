const input =  require('fs').readFileSync('/dev/stdin').toString().split(" ");
let a = parseInt(input[0]);                                                    

if (a%4 ===0 && a%100 !=0 || a%400 === 0){ // 4의 배수이며 a%4 ===0 100의 배수가 아니며 a%100 !=0 또는 400의 배수일 때 a%400 ===0
    console.log("1");
}
else {
    console.log("0");
}