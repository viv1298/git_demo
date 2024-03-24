import readlineSync from "readline-sync";
import {
  inputMatrix as inp,
  matrixAddition as add,
  matrixSubtraction as subtract,
  printMatrix as printmat,
  transposeMatrix as transpose,
  traceMatrix as trace,
  diagnolChalk as diag,
} from "./operations.js";

function main() {
  console.clear();
  console.log("-----------------------");
  console.log("\t Matrix Manipulation \t");
  console.log("-----------------------");
  console.log(
    " 0. Exit \n" +
      " 1. Press 1 to Add Matrix \n" +
      " 2. Press 2 to Subtract Matrix \n" +
      " 3. Press 3 to Print Matrix \n" +
      " 4. Press 4 to Transpose Matrix \n" +
      " 5. Press 5 to Trace Matrix \n" +
      " 6. Press 6 to change colour of diagnol"
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
      printmat(add(inp(), inp()));
      break;
    case 2:
      console.log("you have selected option 2");
      printmat(subtract(inp(), inp()));
      break;
    case 3:
      console.log("you have selected option 3");
      printmat(inp());
      break;
    case 4:
      console.log("you have selected option 4");
      printmat(transpose(inp()));
      break;
    case 5:
      console.log("you have selected option 5");
      printmat(trace(inp()));
      break;
    case 6:
      console.log("you have selected option 6");
      diag(inp());
      break;
    default:
      console.log("invalid option selected");
      break;
  }

  let willContinue = readlineSync.keyInYN("Do you want to continue? ");

  if (willContinue) {
    main();
  } else {
    console.log("Thanks for choosing Matrix CLI, see you again");
  }
}

main();