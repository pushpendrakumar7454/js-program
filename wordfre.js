let strs='my name name'
let fre={}
let wrds=strs.toLowerCase().split(" ")

for(let i=0;i<wrds.length;i++){
    let ch=wrds[i]
    if(fre[ch]){
        fre[ch]++
        
    }else{
        fre[ch]=1
    }
}
console.log(fre);
