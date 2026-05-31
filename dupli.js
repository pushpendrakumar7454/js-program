let arr=[3,4,5,6,75,3,3,3]

for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]===arr[j]){
            console.log(arr[i]);
            break
            
        }
    }
}

