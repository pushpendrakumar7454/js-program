let promt=require('prompt-sync')()

let num=Number(promt("Enter your num-::"))
let rev=0
let temp=num


while(temp>0){
    let digit=temp%10
    rev=rev*10+digit
    temp=Math.floor(temp/10)
    
}
console.log(rev);


