let emp = [
    { dept:"HR", salary: 9000 },
    { dept:"manager", salary: 7800 },
    { dept:"IT", salary: 4000 },
    {dept:"IT",salary:5000}
];

let depart = {};

for (let i = 0; i < emp.length; i++) {
    let key = emp[i].dept;
    let value = emp[i].salary;

    if (depart[key]) {
        depart[key] += value;
    } else {
        depart[key] = value;
    }
}

console.log(depart);