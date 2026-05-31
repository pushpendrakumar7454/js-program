let arr=[67,76,97,98,45,10]

for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length-1;j++){
       if(arr[j]>arr[j+1]){
        let temp=arr[j]
        arr[j]=arr[j+1]
        arr[j+1]=temp
       }
    }
}
console.log(arr[arr.length-2]);


// let max=0;
// let sl=0;

// for(let i=0;i<arr.length;i++){
//     if(arr[i]>max){
//         sl=max
//         max=arr[i]
//     }else if(arr[i]>sl){
//         sl=arr[i]
//     }
// }

// console.log(sl);





