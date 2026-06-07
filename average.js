// calculate the average the marks of all student
// first method
let arr=[80,90,70,85,95]

let sum=0
let ave=0

for(let i=0;i<arr.length;i++){
    sum+=arr[i]
   
}
 ave=sum/arr.length
console.log(ave);


// second method 
let arr2=[80,90,70,85,95]

let total=arr2.reduce((acc,currentvalue)=>{
    return acc+currentvalue
},0)
let average=total/arr.length
console.log(average);

