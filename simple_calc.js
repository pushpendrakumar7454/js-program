let promt=require('prompt-sync')()

let num1=Number(promt("Enter your first number-::"))
let num2=Number(promt("Enter your second number-::"))
let opr=promt("Enter your Opr-::")

if(opr=="+"){
    opr=num1+num2
}else if(opr=="-"){
    opr=num1=num2
}else if(opr=="*"){
    opr=num1*num2
}else if(opr=="/"){
    opr=num1/num2
}else if(opr="%"){
    opr=num1%num2
}
console.log(opr);
