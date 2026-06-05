let promt=require('prompt-sync')()

let user=promt("Enter your string-::")
let vowel='AEIOUaeiou'
let count=0

for(let i=0;i<user.length;i++){
  for(let j=0;j<vowel.length;j++){
    if(user[i]==vowel[j]){
      count++
      break
    }
  }
}

console.log(`Vowels is ${count}`);
