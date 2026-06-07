let students = [
  {
    name: "Ritik",
    marks: [80, 90, 85]
  },
  {
    name: "Aman",
    marks: [50, 40, 60]
  }
];

function generateReport(students){
    return students.map((student)=>{
        let ave=student.marks.reduce((sum,mark)=>sum+mark,0)/student.marks.length

        let grade;
    if(ave>=80){
        grade='A'
    }else if(ave>=60){
        grade='B'
    }else if(ave>=40){
        grade='C'
    }else{
        grade='F'
    }

    return {
        name:student.name,
        average:ave,
        grade:grade
    }
    })
}
console.log(generateReport(students));
