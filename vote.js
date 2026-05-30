let promt=require("prompt-sync")()

let age=Number(promt('Enter your age-::'))

if(age>=18){
    console.log("elegible to vote");
    
}else console.log("not elegible for vote");
