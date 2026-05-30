let arr=[23,45,76,43,49]

let largest=0
let secondlargest=0

for(let i=0;i<arr.length;i++){
    if(arr[i]>largest){
        secondlargest=largest
        largest=arr[i]
    }else{
        secondlargest=arr[i]
    }
}
console.log(largest);
console.log( secondlargest);

