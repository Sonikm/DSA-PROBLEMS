

function bitManipulation(n, i){
    i = i-1;
    let a = (n >> i ) & 1;

    let b = (1 << i) | n;

    let c = (~(1 << i)) & n
 
    console.log(a, b, c);
}

let n = 70;
let i=3;

bitManipulation(n, i);
// 70 => 1000110