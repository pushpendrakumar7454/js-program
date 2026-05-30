let promt=require("prompt-sync")()

let num1=Number(promt('Enter your first number-::'))
let num2=Number(promt('Enter your second number-::'))

if(num1>num2){
    console.log(`${num1} is bigger`);
    
}else{
    console.log(`${num2} is bigger`);
    
}