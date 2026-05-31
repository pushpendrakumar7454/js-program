let arr1=[1,2,4,3,2,5,5,5]
let arr2=[7,8,9,10,11,12]
let marge=[]
// merge
for(let i=0;i<arr1.length;i++){
    marge[marge.length]=arr1[i]
}
for(let i=0;i<arr2.length;i++){
    marge[marge.length]=arr2[i]
}
// sort
for(let i=0;i<marge.length;i++){
    for(let j=0;j<marge.length-1;j++){
        if(marge[j]>marge[j+1]){
            let temp=marge[j]
            marge[j]=marge[j+1]
            marge[j+1]=temp
        }
    }
}
// duplicate remove
for(let i=0;i<marge.length;i++){
    for(let j=i+1;j<marge.length;j++){
        if(marge[i]===marge[j]){
            marge.splice(j,1)
        }
    }
}
console.log(marge);


