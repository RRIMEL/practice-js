// simple way to learn
let a = 5;
let b = 8;

console.log(a, b);

const temp = a;
a = b;
b = temp;
console.log(a, b);

// batter way

let x = 7;
let y = 9;

console.log(x, y);

[x, y] = [y, x];

console.log(x, y);
