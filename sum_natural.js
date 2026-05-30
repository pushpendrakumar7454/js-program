let promt=require('prompt-sync')()
let num=Number(promt("Enter your num-::"))

let sum=0

for(let i=0;i<=num;i++){
    sum=sum+i
}
console.log(sum);
