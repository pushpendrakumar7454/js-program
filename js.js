// js=js is a programing language and async language and used to intractive web pages.
// varible=is a container that store the sata values

// declaration = means create a varible
// initilization=means giving a value

// let a; declaration
// a=10 initilization

// var=is used to declare the varible and can be changes and can be redclayed aand var is function scoped
// let=let is used to declare the varible and can be  changed and can not be redclayed and let is a block scoped
// const=used to declare the constant varible and can not be changed and can not be redclayed
// datatype=what kind of data value stored
// primitive=pririmite is a basic datatype used to store single values 
// 1.Number 2.String 3.Boolon 4.symbol 5.bigint 6.null 7.undifened
// non-primitive(reference)=>is a complex datatype used to store multiple datatype 
// 1.object 2.array 3.function
// undefined=this is never given a value
// null=i m intentionally setting this to nothing

// falsy values=>false, 0, "" (empty string), null, undefined, NaN 
// operation=are used to perform the operarion on values
// string=is a sequice a character inclosed with single quotes, double quotes, or backticks.


// var str="bolo kya HALL h"
// console.log(str.toUpperCase());
// console.log(str.toLocaleLowerCase());
// console.log(str.length);
// console.log(str.slice(1,3));
// console.log(str.substring(1,3));
// console.log(str.split(" "));
// console.log(str.indexOf('o'));
// console.log(str.includes('kya'));
// console.log(str.charAt(5));
// console.log(str.replace("kya","apun"));
// console.log("kya".repeat(4));

// let num=4.2

// console.log(Math.PI);
// console.log(Math.E);
// console.log(Math.ceil(num));
// console.log(Math.floor(num));
// console.log(Math.round);
// console.log(Math.max(3,4,5));
// console.log(Math.min(3,4,5));
// console.log(Math.abs(-4));
// console.log(Math.pow(4));
// console.log(Math.sqrt(3));
// console.log(Math.random());

// if=is used to execute a block of of become a condition is true.
// else if=check the another condition when become previes condition is false
// else=execute a block of code become when all previes condition is false

// var a=45
// var b=40
// var c=90

// if(a>b && a>c){
//     console.log(`${a} is big`);
// }else if(b>a && b>c){
//     console.log(`${b} is big`);
    
// }else{
//     console.log(`${c} is big`);
    
// }

// let marks = 75;

// if (marks >= 90) {
//     console.log("A grade");
// } else if (marks >= 75) {
//     console.log("B grade");
// } else if (marks >= 50) {
//     console.log("C grade");
// } else {
//     console.log("Fail");
// }

// break=is used to exit the loop
// continue=is used to akip the corrent condition and move the nest one




// for(let i=0;i<=10;i++){
//     console.log(i);
//     if(i===5){
//         break
//     }
// }
// for(let i=1;i<=10;i++){
//     if(i===5){
//         continue
//     }
//     console.log(i);
// }

// loop=A loop is used to execute a block of code multiple times until a condition becomes false.


// forloop=used when you know how many time to repeat 
// whileloop=exexute a block of code when become a condition is true
// dowhile=is used to execute a block of at least one time

// for(let i=1;i<=10;i++){
//     console.log(i);
    
// }
// let i=1
// while(i<=10){
//     console.log(i);
//     i++
// }

// let i=1;
// do{
//     console.log(i);
//     i++
    
// }while(i<=10);

// function=function is a block of code does a speciefic task use to again to again whenever needed.


// function decration=means function declare function keyword and function name

// function ab(){

// }

// function expresion= function can also be stored in a varible

// let ab=function(){

// }

// parameter=means review a value when the function called
// argument=actual value passed to the function when it is called


// function ab(a,b){
//     return a+b
// }
// // console.log(ab(1,4));//argument
// a,b is a parameter

// anonymous function=means without name of a function

// arrow function=is modern and shorter way  to write aa function

// let ab=(a,b)=>{
//     return a*b
// }
// console.log(ab(4,2));

// default parameter=user not pass the value so function use the default value


// let ab=(name="arun")=>{
//     return `mera name ${name} hai`

// }
// console.log(ab("charan"));
// console.log(ab());

// rest parameter=is used to collect the multiple in single Array.


// function ab(...g){
//     let sum=0
//     for(let i=0;i<g.length;i++){
//         sum=sum+i
//     }
//     return sum
// }
// console.log(ab(1,2,3,4,5,6,7));


// return=send back a value to from a function and terminate he function execuation
// First-Class-function=> function stored in varible pass function as an argument to other function
// return function from other function

// let ab = function(){console.log("hello");
// }//function stored in a varible

// function call(fn){
//      fn()
//      fn()
// }
// call(ab)

// function make(){
//     return function(){
//         console.log("hello");
//         return 10
        
//     }
// }
// console.log(make()());


// function abc(){
//     let a="apun arun"
//      function bc(){
//         let  b="apun lilu"
//         console.log(a);
//         console.log(b);
//     }
//     return bc
// }

// let result=abc()
// result()













