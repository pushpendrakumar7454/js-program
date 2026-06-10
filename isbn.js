let promt=require('prompt-sync')()
let n=Number(promt("Enter your ISBN number-::"))
let copy=n;
let count=0

while(n>0){
    count++
    n=Math.floor(n/10)
}
if(count!=10){
    console.log("Not ISBN number");
    
}else{
    let ans=0;
    let wieght=1
    while(copy>0){
        let dig=copy%10
        ans=ans+(dig*wieght)
        wieght++
        copy=Math.floor(copy/10)
    }
    if(ans%11==0){
        console.log("ISBN number");
        
    }else{
        console.log("Not ISBN number");
        
    }
}
