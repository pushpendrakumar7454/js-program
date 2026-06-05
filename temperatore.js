let promt=require('prompt-sync')()

let temp=Number(promt("Enter temperature-::"))
let unit=promt("It is in C or F?").toUpperCase()

if(unit=="C"){
    console.log(`${temp}C = ${(temp*9/5)+32}F`);
}else if(unit=="F"){
    console.log(`${temp}F = ${((temp-32)*5/9).toFixed(2)}C`);
    
}else{
    console.log("invalid temp");
    
}