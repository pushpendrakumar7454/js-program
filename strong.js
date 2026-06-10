let promt=require('prompt-sync')()

let num=Number(promt("Enter the Number-::"))
let copy=num
let orginal=0

while(copy>0){
    let digit=copy%10
    let fact=1
    for(let i=1;i<=digit;i++){
        fact*=i
    }
    orginal=orginal+fact
    copy=Math.floor(copy/10)
}
if(orginal==num){
    console.log("storang Number");
    
}else{
    console.log("No");
    
}