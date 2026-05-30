let prompt=require('prompt-sync')()
let num=Number(prompt("Enter your number-::"))
let isprime=true

for(let i=2;i<num;i++){
    if(num%i==0){
        isprime=false
        break
    }
}
if(isprime) console.log('prime');
else console.log('notprime');

