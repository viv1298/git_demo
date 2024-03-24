import readlineSync from "readline-sync";
import todos, {
  addTodo as add,
  viewTodo as view,
  markTodoDone as mark,
  deleteTodo as del,
} from "./operations.js";

function main() {
  console.clear();
  console.log("-----------------------");
  console.log("\t ToDo CLI \t");
  console.log("-----------------------");
  console.log(
    " 0. Exit \n" +
      " 1. Press 1 to Add Todo \n" +
      " 2. Press 2 to View Todo \n" +
      " 3. Press 3 to Mark Todo \n" +
      " 4. Press 4 to Delete Todo"
  );

  const option = readlineSync.questionInt(
    "Enter the option you want to perform: "
  );

  switch (option) {
    case 0:
      console.log("Exitingg");
      return;
    case 1:
      console.log("you have selected option 1");
      add();
      break;
    case 2:
      console.log("you have selected option 2");
      view();
      break;
    case 3:
      console.log("you have selected option 3");
      view();
      mark();
      break;
    case 4:
      console.log("you have selected option 4");
      view();
      del();
      break;
    default:
      console.log("invalid option selected");
      break;
  }

  let willContinue = readlineSync.keyInYN("Do you want to continue? ");

  if (willContinue) {
    main();
  } else {
    console.log("Thanks for choosing todo CLI, see you again");
  }
}

main();
