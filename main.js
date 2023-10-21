import inquirer from "inquirer";
let todo = ["Wasif", "Hamza", "Umer"];
async function createTodo(arr) {
    let ans = await inquirer.prompt({
        type: "list",
        message: "Select an operation",
        name: "select",
        choices: ["add", "update", "view", "delete"],
    });
    if (ans.select == "add") {
        let addTodo = await inquirer.prompt({
            type: "input",
            message: "Add Item",
            name: "todo",
        });
        arr.push(addTodo.todo);
        console.log(todo);
    }
    if (ans.select == "update") {
        let updateTodo = await inquirer.prompt({
            type: "list",
            message: "Select an Item to update",
            choices: todo,
            name: "todo",
        });
        let newTodo = await inquirer.prompt({
            type: "input",
            message: "Update Item",
            name: "todo",
        });
        const index = todo.indexOf(updateTodo.todo);
        if (index !== -1) {
            todo[index] = newTodo.todo;
        }
        console.log(todo);
    }
    if (ans.select == "view") {
        console.log("To-Do List:");
        console.log(todo.join("\n"));
    }
    if (ans.select == "delete") {
        let deleteTodo = await inquirer.prompt({
            type: "list",
            message: "Select an Item to delete",
            choices: todo,
            name: "todo",
        });
        const index = todo.indexOf(deleteTodo.todo);
        if (index !== -1) {
            todo.splice(index, 1);
        }
        console.log(todo);
    }
}
createTodo(todo);
