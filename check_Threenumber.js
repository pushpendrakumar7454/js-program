let promt=require("prompt-sync")()

let num1=Number(promt('Enter your first number-::'))
let num2=Number(promt('Enter your second number-::'))
let num3=Number(promt('Enter your three number-::'))

if((num1>num2) && (num1>num3)){
    console.log(`${num1} is bigger`);
    
}else if ((num2>num1) && (num2>num3)){
    console.log(`${num2} is bigger`);
    
}else{
    console.log(`${num3} is bigger`);
    
}