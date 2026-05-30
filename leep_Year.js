let promt=require("prompt-sync")()

let year=Number(promt('Enter your Year-::'))

if((year%400==0) || (year%4==0 && year%100!=0)){
    console.log("Leep year");
    
}else console.log("not leep year");
