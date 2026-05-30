let promt=require('prompt-sync')()
let computer=Math.floor(Math.random() * 10) + 1;
let attemnt=5;

while(attemnt>0){
    let user=Number(promt("Enter your Number-::"))
    if(user==computer){
        console.log(`Guess is correct`);
        break
    }else if(user>computer){
        console.log(`number is too big`);
    }else{
        console.log('number is too low');
    }
    attemnt--
    console.log(`attemt left-::${attemnt}`);
}

if(attemnt===0){
    console.log(`Game over is! correct is ${computer}`);
}






