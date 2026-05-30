let promt=require("prompt-sync")()

let num=Number(promt('Enter your num-::'))
let fact=1

for(let i=1;i<=num;i++){
    fact=fact*i
}

console.log(fact);
