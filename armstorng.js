let prompt=require('prompt-sync')()
let num=Number(prompt("Enter your number-::"))
let temp=num
let count=0

while(temp>0){
    let dig=temp%10
    count=count+(dig*dig*dig)
    temp=Math.floor(temp/10)
}
if(num==count) console.log("isArmstong");
else console.log('Not armStorng');

