let prompt = require('prompt-sync')();

let num = Number(prompt('Enter your number-::'));

let a = 0;
let b = 1;

console.log(a);
console.log(b);

let i = 0;

while(i <= num){
    let c = a + b;
    console.log(c);
    a = b;
    b = c;
    i++;
}