// let user = {
//     ritik: 3000,
//     arun: 5000,
//     priya: 8500
// };

// let max = 0;
// let total = "";

// for(let key in user){
//     if(user[key] > max){
//         max = user[key];
//         total = key;
//     }
// }

// console.log(total, max);


let sum=0
function total(...max){
    for(let i=0;i<max.length;i++){
        sum+=max[i]
    }
    return sum
}
console.log(total(3,4,5,6,7));


