let prompt=require('prompt-sync')()

let num=Number(prompt("Enter your num-::"))

let temp=num
let rev=0

while(temp>0){
    let dig=temp%10
    rev=rev*10+dig
    temp=Math.floor(temp/10)
}
if(rev==num) console.log("isPalindrome");
else console.log("notPlinedrome");

