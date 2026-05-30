let promt=require("prompt-sync")()
let word=promt("Enter your word-::")
let vowel='AEIOUaeiou'
let isvowel=false

for(let i=0;i<vowel.length;i++){
    if(vowel[i]===word){
        isvowel=true
        break
    }
}
if(isvowel){
    console.log("is vowel");
    
}else console.log("is contonent");
