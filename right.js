let arr=[5,6,7,8,4,3]

let right=arr[arr.length-1]

for(let i=arr.length;i<=0;i--){
    arr[i]=arr[i-1]

}
arr[0]=right
console.log(arr);
