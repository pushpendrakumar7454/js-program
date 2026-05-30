let promt=require("prompt-sync")()

let num=Number(promt('Enter your number-::'))

if(num%2==0){
    console.log(`${num} is Even`);
    
}else{
    console.log(`${num} is odd`); 
}