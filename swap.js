let a = 10;
let b = 20;
let c = 0;

// my logic
// c = b;
// b = a;
// a = c;

const temp = a;
a = b
b = temp;

console.log("a :", a);
console.log("b :", b);


//advance 

let x = 5;
let y = 10;

[x,y]=[y,x];

console.log("X :", x);
console.log("Y :", y);