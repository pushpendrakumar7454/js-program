let promt=require('prompt-sync')()
let table=Number(promt("Enter your num-::"))

for(let i=1;i<=10;i++){
    console.log(`${table}X${i} = ${table*i}`);
    
}