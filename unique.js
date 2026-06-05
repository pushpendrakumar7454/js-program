let arr1 = [2,3,4,5,6];
let arr2 = [2,3,4,7,85];


for(let i=0;i<arr1.length;i++){
    let found=false
    for(let j=0;j<arr2.length;j++){
        if(arr1[i]==arr2[j]){
            found=true
        }
    }
    if(!found){
        console.log(arr1[i]);
        
    }
}
for(let i=0;i<arr2.length;i++){
    let found=false
    for(let j=0;j<arr1.length;j++){
        if(arr1[i]==arr2[j]){
            found=true
        }
    }
    if(!found){
        console.log(arr2[i]);
    }
}
