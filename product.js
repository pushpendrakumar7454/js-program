let products=[45,6,7,8,94]
let sold=[6,7]

let nosold=[]

for(let i=0;i<products.length;i++){
    if(!sold.includes(products[i])){
        nosold.push(products[i])
    }
}
console.log(nosold);

