const input =  require('fs').readFileSync('dev/stdin').toString().split('\n');


for(let i=0; i <= input.length-1 ; i++){
    let a = parseInt(input[i].split(' ')[0]);
    let b = parseInt(input[i].split(' ')[1]);
    if( a + b === 0 ){
        return  0;
    }
    console.log(a+b);
}