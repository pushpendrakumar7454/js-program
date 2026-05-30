let todos = [];
let prompt=require('prompt-sync')()
function addTask(task) {
    todos.push({
        id: todos.length + 1,
        task,
        done: false
    });
}

let completeTask = (id) => {
    let todo = todos.find(t => t.id === id);
    if (todo) todo.done = true;
};

let removeTask = (id) => {
    todos = todos.filter(t => t.id !== id);
};

let showTask = () => {
    todos.forEach(t => {
        console.log(`${t.id}. [${t.done ? "done" : "Not done"}] ${t.task}`);
    });
};

let task1 = prompt("Enter first task:");
let task2 = prompt("Enter second task:");

addTask(task1);
addTask(task2);

let completeId = Number(prompt("Enter task id to complete:"));
completeTask(completeId);

let removeid=Number(prompt("Enter remve task-::"))
removeTask(removeid)

showTask();