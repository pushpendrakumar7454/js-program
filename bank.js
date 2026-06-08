let promt = require('prompt-sync')();
const { log } = require('console');
const fs = require("fs");

class Bank {
    constructor(user, pin, accountno, age, balance = 0) {
        this.user = user;
        this.pin = pin;
        this.accountno = accountno;
        this.age = age;
        this.balance = balance;

        this.alldetail = () => {
            console.log(`Name: ${this.user}`);
            console.log(`PIN: ${this.pin}`);
            console.log(`Account No: ${this.accountno}`);
            console.log(`Age: ${this.age}`);
            console.log(`Balance: ${this.balance}`);
        }
    }
}

let banks = [];
if (fs.existsSync("bank.json")) {
    let data = fs.readFileSync("bank.json", "utf-8");
    if (data) {
        let users = JSON.parse(data);
        banks = users.map(
            u => new Bank(
                u.user,
                u.pin,
                u.accountno,
                u.age,
                u.balance
            )
        );
    }
}

function addUser(){
    let user = promt("Enter your name-::");
        let pin = Number(promt('Enter your pin-::'));
        let accountno = Math.floor(Math.random() * 9000000000) + 1000000000;
        let age = Number(promt('Enter your age and age greater 18-::'));
        if(age<=18){
            console.log("Account creation failed! You must be at least 18 years old to open a bank account.");
    
        }else{
            let bank1 = new Bank(user, pin, accountno, age);
        banks.push(bank1);
        fs.writeFileSync(
            "bank.json",
            JSON.stringify(banks, null, 2)
        );
        console.log("\nAccount Created Successfully!");
        bank1.alldetail();

        }
        

}

function depositAmount(){
    let acc = Number(promt("Enter Account No-:: "));
    let amount = Number(promt("Enter Deposit Amount-:: "));
    let user = banks.find(b => b.accountno === acc);
    if (user) {
        user.balance += amount;
        fs.writeFileSync(
            "bank.json",
            JSON.stringify(banks, null, 2)
        );
        console.log("Amount Deposited Successfully!");
        console.log("Current Balance:", user.balance);
    }
    else {
        console.log("Account Not Found!");
    }

}

function withdrowAmount(){
     let acc = Number(promt("Enter Account No-:: "));
    let amount = Number(promt("Enter Withdrow Amount-:: "));
    let user = banks.find(b => b.accountno === acc);
    if (user) {
        user.balance -= amount;
        fs.writeFileSync(
            "bank.json",
            JSON.stringify(banks, null, 2)
        );
        console.log("Amount Withdrow Successfully!");
        console.log("Current Balance:", user.balance);
    }
    else {
        console.log("Account Not Found!");
    }
}

function updateUser(){
    let acc=Number(promt("Enter your account no-::"))
    let user=banks.find(u=>u.accountno==acc)
    if(user){
        user.pin=Number(promt("Enter new pin-::"))
        user.age=Number(promt("Enter new Age-::"))
        fs.writeFileSync('bank.json',
            JSON.stringify(banks,null,2)
        )
        console.log("Account update Successfully!");
        
    }else{
        console.log("Accont not found!");
        
    }
}
function deleteUser(){
    let acc = Number(promt("Enter your account no-::"));
    let user = banks.findIndex(u => u.accountno == acc);
    if(user !== -1){
        let confirm = promt("Are you sure delete your account (y/n)-:: ");
        if(confirm.toLowerCase() == 'y'){
            banks.splice(user, 1);
            fs.writeFileSync(
                'bank.json',
                JSON.stringify(banks, null, 2)
            );
            console.log("Account deleted Successfully!");
        }
        else{
            console.log("Account deletion cancelled!");
        }
    }else{
        console.log("Account not found!");
    }
}
function showUser(){
    let acc=Number(promt("Enter your account no-::"))
    let user=banks.find(u=>u.accountno===acc)
    if(user){
        console.log("=========================");
        user.alldetail()
        console.log("-----------------------------");
        
    }else{
        console.log("Account not found");
        
    }
    }
function showAllUser(){
     banks.forEach(u=>{
        u.alldetail()
        console.log("---------------------------------");
        
     })
}    

function checkBalance(){
    let acc=Number(promt("Enter your accountt no-::"))
   let user=banks.find(u=>u.accountno===acc)
   if(user){
    console.log("----------------------------");
    console.log(`${user.user} your current Balance now-::${user.balance}`);
    console.log("-----------------------------------");
 
   }
}
    


while (true) {
let choice = Number(promt(`
1.add User
2.Deposit
3.Withdrow
4.update User
5.Delete user
6.Show User
7.Shoe All user
8.Check Balance
9.Exit

Enter your choice-:: `));
    if (choice === 1) {
        addUser()
        
    }

    else if (choice===2) {
        depositAmount()    
}
     else if (choice === 3) {
        withdrowAmount()
   
}
else if (choice === 4) {
    updateUser()
    }
else if(choice == 5){
    deleteUser()
    
} 
else if (choice === 6) {
   showUser()
}
else if(choice==7){
    showAllUser()
}
else if (choice === 8) {
    checkBalance()
   
    }
    
else if (choice === 9) {
    console.log('Thank You | Exit');
    break;
    }
}
