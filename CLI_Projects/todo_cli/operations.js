import readlineSync from "readline-sync";

const todos = [];

export function addTodo() {
  const title = readlineSync.question("what is your to do?  ");
  todos.push({ title, isDone: false });
  console.log("Todo added successfully");
}

export function viewTodo() {
  console.log("These are your todos ");
  for (let i = 0; i < todos.length; i++) {
    console.log(
      `${i + 1}. ${todos[i].title} ${todos[i].isDone ? "[X]" : "[]"} `
    );
  }
}

export function markTodoDone() {
  const inp = readlineSync.questionInt("what to do have you completed?:  ");
  if (inp > todos.length || inp < 1) {
    console.log("Invalid index");
  } else {
    todos[inp - 1].isDone = true;
  }
}

export function deleteTodo() {
  const inp = readlineSync.questionInt("which todo do you want to delete?:  ");
  if (inp > todos.length || inp < 1) {
    console.log("Invalid index");
  } else {
    todos.splice(inp - 1, 1);
  }
}

export default todos;
