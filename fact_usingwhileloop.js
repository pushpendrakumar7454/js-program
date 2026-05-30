let promt=require("prompt-sync")()

let num=Number(promt("Enter your number-::"))
let fact=1
let i=1
while(i<=num){
    fact=fact*i
    i++
}
console.log(fact);
