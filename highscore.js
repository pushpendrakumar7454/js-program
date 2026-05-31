let students=[
    {name:"Rahul",marks:90},
    {name:"Manish",marks:78},
    {name:"Natural",marks:87}
]

let topper=students[0]

for(let i=1;i<students.length;i++){
    if(students[i].marks>topper.marks){
        topper=students[i]
    }
}

console.log(topper);

