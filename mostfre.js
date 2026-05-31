let nums=[4,5,6,7,8,9,0,8,8,8,8,8]
let result=0;
let fre={}
let maxcunt=0;

for(let i=0;i<nums.length;i++){
    let num=nums[i]
    if(fre[num]){
        fre[num]++
    }else{
        fre[num]=1
    }
    if(fre[num]>maxcunt){
        maxcunt=fre[num]
        result=num
    }

}
console.log(result);
