let promt=require('prompt-sync')()

let num=(promt("Enter your num-::"))
let count=0

while(num>0){
    let digit=num%10
    count++
    num=Math.floor(num/10)
}
console.log(count);

