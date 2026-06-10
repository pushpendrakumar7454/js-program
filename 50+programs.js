// let prices= [100,250,500,150,700];

// let most= prices.filter(price=> price>=300)
// console.log(most);

// let students= ["Aman","Ritik","Priya","Rahul"];
// console.log(students[students.length-1]);

// let products= ["Laptop","Mouse","Keyboard"];
// products.push("Monitor")
// console.log(products);

// let notifications= [
// "Order Placed",
// "Order Shipped",
// "Order Delivered"
// ];

// notifications.pop()
// console.log(notifications);

// let users= ["Aman","Ritik","Priya"];

// console.log(users.includes("Ritik"));

// let marks= [80,90,70];

// let allmark=marks.map(mark=>{
//     return mark+"%"
// })
// console.log(allmark);

// let cart= [
// "Mouse",
// "Keyboard",
// "Monitor",
// "Laptop"
// ];

// console.log(cart.length);

// let marks= [80,90,70,85,95];

// let sum=marks.reduce((acc,mark)=>{
//     return acc+mark
// },0)
// let ave=sum/marks.length
// console.log(ave);


// let numbers= [1,2,3,4,5,6,7,8];

// let Even=numbers.filter((number)=>{
//     return number%2==0
// })
// console.log(Even);

// let products= [
// "Laptop",
// "Mouse",
// "Keyboard",
// "Monitor"
// ];

// let newpro=products.indexOf("Keyboard")
// console.log(newpro);


// let sales= [500,700,1000,300];

// let sum=sales.reduce((acc,sale)=>{
//     return acc+sale
// },0)
// console.log(sum);


// let users= ["ritik","aman","priya"];
// let newUser=users.map((user)=>{
//     return user.toUpperCase()
// })

// console.log(newUser);

// let ages= [12,15,17,19,22];

// let adult=ages.find((age)=>age>=18)
// console.log(adult);


// let nums= [5,8,10,3];
// let positive=nums.every((num)=>num>0)
// console.log(positive);


// let numbers= [1,2,3,2,4,2,5,1,1,1];

// let fre={};

// for(let i=0;i<numbers.length;i++){
//     let num=numbers[i]
//     if(fre[num]){
//         fre[num]++
//     }else{
//         fre[num]=1
//     }
// }
// console.log(fre);

// let nums= [10,50,20,80,40];

// let largest=0;
// let secondlarget=0

// for(let i=0;i<nums.length;i++){
//     if(nums[i]>largest){
//         secondlarget=largest
//         largest=nums[i]
//     }else if(nums[i]>secondlarget && nums[i] !== largest){
//         secondlarget=nums[i]
//     }
// }
// console.log(largest);
// console.log(secondlarget);


// let nums = [10, 50, 20, 80, 40];
// nums.sort((a, b) => b - a);
// console.log(nums[1]); 

// let ids= [1,2,2,3,4,4,5,5];

// let id=ids.filter((value,index)=>{
//     return ids.indexOf(value)===index
// })
// console.log(id);


// let ids= [1,2,2,3,4,4,5,5];

// let unique=[];

// for(let i=0;i<ids.length;i++){
//     let found=false
//     for(let j=0;j<unique.length;j++){
//         if(ids[i]===unique[j]){
//             found=true;
//             break
//         }
//     }
//     if(!found){
//         unique.push(ids[i])
//     }
// }
// console.log(unique);

// let words= [
// "JavaScript",
// "HTML",
// "CSS",
// "Programming"
// ];

// let largest="";
// for(let i=0;i<words.length;i++){
//     if(words[i].length>largest.length){
//         largest=words[i]
//     }
// }

// console.log(largest);


// let nums= [1,2,3,4,5];
// let last=nums.pop()
// nums.unshift(last)
// console.log(nums);

// let sales = ["Mouse","Keyboard","Mouse","Laptop","Mouse","Keyboard"];
// let count={};
// let product="";
// let maxCount=0;

// for(let i=0;i<sales.length;i++){
//     let sale=sales[i]
//     if(count[sale]){
//         count[sale]++
//     }else{
//         count[sale]=1
//     }
//     if(count[sale]>maxCount){
//         maxCount=count[sale]
//         product=sale
//     }
// }
// console.log(product);


// let user = {
// name:"Ritik",
// age:21,
// city:"Bhopal"
// };
// console.log(user.name);

// let user = {
// name:"Ritik",
// age:21
// };
// user.age=22
// console.log(user);

// let user= {
// name:"Ritik",
// city:"Bhopal"
// };
// user.country="India"
// console.log(user);

// let user= {
// name:"Ritik",
// age:21,
// password:"12345"
// };
// delete user.password
// console.log(user);


// let product= {
// name:"Laptop",
// price:60000
// };
// if('price' in product){
//     console.log("exists.");
    
// }else{
//     console.log("not exits");
    
// }

// let car= {
// brand:"BMW",
// model:"X5",
// year:2025
// };

// console.log(Object.keys(car));

// let keys=[]

// for(let key in car){
//     keys.push(key)
// }
// console.log(keys);

// let car= {
// brand:"BMW",
// model:"X5",
// year:2025
// };


// let values=[]

// for(let value in car){
//     values.push(car[value])
// }

// console.log(values);
// console.log(Object.values(car));


// let user= {
// name:"Ritik",
// age:21,
// city:"Bhopal"
// };

// for(let key in user){
//     console.log(`${key} : ${user[key]}` );
    
// }

// let employee = {
//     name: "Aman",
//     salary: 50000
// };
// employee.salary = employee.salary + (employee.salary * 10 / 100);
// console.log(employee);

// let user= {
// name:"Ritik",
// address: {
// city:"Bhopal",
// state:"MP"
// }
// };
// console.log(user.address.city);

// let student = {
//     name: "Priya",
//     age: 20,
//     course: "BCA"
// };
// let {name,age} = student;
// console.log(name);
// console.log(age);

// let student = {
//     name: "Priya",
//     age: 20
// };

// let { name: studentName, age: studentAge } = student;

// console.log(studentName);
// console.log(studentAge);


// let user= {
// name:"Ritik",
// age:21
// };
// let address= {
// city:"Bhopal",
// state:"MP"
// };


// let merged={
//     ...user,
//     ...address
// }

// console.log(merged)


// let user= {
// name:"Ritik",
// age:21,
// city:"Bhopal",
// country:"India"
// };

// console.log(Object.keys(user).length);


// let
// employees= {
// aman:25000,
// ritik:50000,
// priya:45000
// };

// let high=0
// let highEmployee=""

// for(let key in employees){
//     if( employees[key]>high){
//         high=employees[key]
//         highEmployee=key
//     }
// }

// console.log(highEmployee);


// let votes= {
// JavaScript:25,
// Python:30,
// Java:15,
// Cpp:10
// };

// let mostUse=0

// for(let i in votes){
//     if(votes[i]>mostUse){
//         mostUse=votes[i]
//     }
// }
// console.log(mostUse);

// let countries= {
// India:"Delhi",
// Japan:"Tokyo",
// France:"Paris"
// };


// let rev={}

// for(let key in countries){
//     rev[countries[key]]=key
// }

// console.log(rev);


// let marks= {
// math:90,
// science:80,
// english:85
// };

// let total=0;

// for(let i in marks){
//     total=total+marks[i]
// }
// console.log(total);

// let marks= {
// math:90,
// science:80,
// english:85
// };

// let sum=Object.values(marks).reduce((acc,value)=>{
//     return acc+value
// },0)

// console.log(sum);

// let user= {
// name:"Ritik",
// age:21
// };
// if("email" in user){
//     console.log("Exit");    
// }else{
//     console.log("not Exit"); 
// }



// let inventory= {
// mouse:25,
// keyboard:10,
// monitor:5,
// laptop:2
// };

// let newtotal=(Object.values(inventory)).reduce((acc,all)=>{
//     return acc+all
// },0)

// console.log(newtotal);
// let max=Math.max(...Object.values(inventory))
// // Object.values(inventory).filter((value)=>{
// //     return  inventory[value]===sum
// // })

// console.log(max);
// let min=Math.min(...Object.values(inventory))
// console.log(min);


// function greet(name){
//     return name
// }

// console.log(greet('ritik'));

// function add(a,b){
//     return a+b
// }
// console.log(add(10,20));

// function square(num){
//     return num*num
// }

// console.log(square(5));

// function isEven(num){
//     if (num%2==0){
//        return true
        
//     }else{
//         return false
//     }
// }
// console.log(isEven(4));


// function greet(name="Guest"){
//     return `My name is ${name} Rajpoot`
// }

// console.log(greet());
// console.log(greet("Natural"));

// function convertTemp(celsius){
//     return (celsius*9/5)+32
// }

// console.log(convertTemp(4));


// let multiply=(a,b)=>{
//     return a+b
// }
// console.log(multiply(10,20));


// function calculateDiscount(price){
//     return price-(price*10/100)
// }
// console.log(calculateDiscount(500));


// let findLargest=(a,b,c)=>{
//     return Math.max(a, b, c);
// };

// console.log(findLargest(20,50,30)); 

// let findLargest=(a,b,c)=>{
//     if(a>c && a>b){
//         return a
//     }else if(b>a && b>c){
//         return b
//     }else{
//         return c
//     }
// }
// console.log(findLargest(20,50,30));

// function reverseString(str){
//     let rev=""
//     for(let i in str){
//            rev=str[i]+rev
//     }
//     return rev
// }
// console.log(reverseString("hello"));

// function countVowels(str){
//     let vowel="AEIOUaeiou"
//     let count=0;
//     for(let i in str){
//         if(vowel.includes(str[i]))
//             count++
//     }
//      return count
// }

// console.log(countVowels("hello"));
// console.log(countVowels("javascript"));


// function generateUsername(name){
//     return name.toLowerCase().replace(" ", "_");
// }
// console.log(generateUsername("Arun kumar"));

// function sum(...numbers){
//     let max=0
//     for(let i=0; i<numbers.length;i++){
//         max=max+numbers[i]
//     }
//     return max
// }
// console.log(sum(1,2,3,4));


// function login(username, password) {
//     if (username === "admin" && password === 1234) {
//         return "Login Successful";
//     } else {
//         return "Invalid Credentials"
//     }
// }

// console.log(login("admin", 1234)); 
// console.log(login("ritik", 1234)); 

// function factorial(n){
//     let fact=1
//     for(let i=1;i<=n;i++){
//         fact*=i
//     }
//     return fact
// }
// console.log(factorial(5));

// function isPalindrome(str){
//     let rev='';
//     for(let i in str){
//         rev=str[i]+rev
//     }
//     if(rev===str){
//     return true;
    
// } else return false;
// }

// console.log(isPalindrome("madam"));
// console.log(isPalindrome("Natural"));


// function checkPassword(password) {
//     let hasNumber = false;
//     for (let ch of password) {
//         if (ch >= '0' && ch <= '9') {
//             hasNumber = true;
//             break;
//         }
//     }
//     if (password.length >= 8 && hasNumber) {
//         return "Strong";
//     }
//     return "Weak";
// }
// console.log(checkPassword("admin123")); 
// console.log(checkPassword("admin"));    


// function makeMultiplier(multiplier){
//     return function(num){
//         return num*multiplier
//     }
// } 

// let double=makeMultiplier(2)
// console.log(double(10));

// function welcomeUser(name){
//     console.log(`Welcome ${name}`);
    
// }

// function processUser(name,callback){
//     console.log('Processing User.....');
//     callback(name)
// }


// processUser("Ritik",welcomeUser)
// let items=[
// { name:"Mouse", price:500 },
// { name:"Keyboard", price:1000 },
// { name:"Monitor", price:10000 }
// ]

// function generateBill(items){
//     return items.reduce((acc,item)=>{
//         return acc+item.price
//     },0)

// }
// console.log(generateBill(items));
    

// let users= [
// { name:"Ritik", age:20 },
// { name:"Aman", age:16 },
// { name:"Priya", age:25 }
// ];


// let adult=users.filter((user)=>{
//     return user.age>=18
// })

// console.log(adult);


// let products= [
// { name:"Laptop", price:50000 },
// { name:"Mouse", price:500 }
// ];

// let printname=products.map((product)=>{

//     return product.name
// })

// console.log(printname);



// let users = [
//     { name: "Ritik" },
//     { name: "Aman" },
//     { name: "Priya" }
// ];
// function findUser(users, username) {
//     return users.find(user => user.name === username);
// }

// console.log(findUser(users, "Priya"));
// let students = [
//     { name: "Ritik", marks: 80 },
//     { name: "Aman", marks: 90 },
//     { name: "Priya", marks: 70 }
// ];

// function getTotalMarks(students){
//     return students.reduce((acc,student)=>{
//         return acc+student.marks
//     },0)
// }

// console.log(getTotalMarks(students));



// let products= [
// { name:"Mouse", stock:10 },
// { name:"Keyboard", stock:0 },
// { name:"Monitor", stock:5 }
// ];

// let stocks=products.filter((product)=>{
//     return product.stock>0
// })
// console.log(stocks);


// let students = [
//     { name: "Ritik", age: 20 },
//     { name: "Aman", age: 21 }
// ];

// function addStudent(students,student){
//     students.push(student)
// }

// addStudent(students,{name:"Natural",age:21})

// console.log(students);


// let products= [
// { name:"Laptop", price:50000 },
// { name:"Phone", price:30000 },
// { name:"Mouse", price:500 }
// ];


// let newpro=products.filter((product)=>{
//     return (product.price>10000)
// })

// console.log(newpro);

// let products = [
//     { name: "Laptop", price: 50000 },
//     { name: "Phone", price: 30000 },
//     { name: "Mouse", price: 500 }
// ];

// function countExpensiveProducts(products) {
//     return products.filter(product => product.price > 10000).length;
// }

// console.log(countExpensiveProducts(products));


// let cart= [
// { name:"Mouse", price:500, qty:2 },
// { name:"Keyboard", price:1000, qty:1 },
// { name:"Monitor", price:10000, qty:1 }
// ];

// function getCartTotal(cart){
//     return cart.reduce((acc,cart)=>{
//          return acc+(cart.price*cart.qty)
//     },0)
// }
// console.log(getCartTotal(cart));

// let students = [
//     { name: "Ritik", marks: [80, 90, 85] },
//     { name: "Aman", marks: [70, 75, 80] }
// ];
// function getAverageMarks(students) {
//     return students.map(student => {
//         let total = student.marks.reduce((acc, mark) => acc + mark, 0);

//         return {
//             name: student.name,
//             mark:student.marks,
//             average: total / student.marks.length
//         };
//     });
// }
// console.log(getAverageMarks(students));

// let inventory = [
//     { id: 1, name: "Laptop" },
//     { id: 2, name: "Mouse" },
//     { id: 3, name: "Monitor" }
// ];

// function findProductById(id) {
//     return inventory.find(product => product.id === id);
// }

// console.log(findProductById(2));