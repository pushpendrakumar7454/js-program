let arr=[4,5,6,7,8,9,1]
let min=arr[0];

for(let i=0;i<arr.length;i++){
    if(arr[i]<min){
        min=arr[i]
    }
}
console.log(min);
