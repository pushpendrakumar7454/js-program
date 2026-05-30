let prompt = require('prompt-sync')();
let value = Math.floor(Math.random() * 10) + 1;
let attempt = 5;
let count = 0;

while (attempt > 0) {
    let user = Number(prompt("Enter your value :: "));
    let computer = Math.floor(Math.random() * 10) + 1;
    count++;
    console.log(`Computer guessed :: ${computer}`);
    if (user === value) {
        console.log(`User wins in ${count} attempts`);
        break;
    } else if (computer === value) {
        console.log(`Computer wins in ${count} attempts`);
        break;
    } else {
        console.log("No one guessed correctly");
    }
    attempt--;
    console.log(`Attempts left :: ${attempt}`);
}

if (attempt === 0) {
    console.log(`Game Over! Correct value was ${value}`);
}