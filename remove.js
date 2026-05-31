let arr=[4,5,6,6,6,7,8]
for(let i=0;i<arr.length;i++){
    for(j=i+1;j<arr.length;j++){
        if(arr[i]==arr[j]){
            arr.splice(j,1)
            j--
        }
    }
}
console.log(arr);
