import readlineSync from "readline-sync";
import chalk from "chalk";

export function inputMatrix() {
  const rows = readlineSync.questionInt("Enter the number of rows: ");
  const cols = readlineSync.questionInt("Enter the number of cols: ");

  const mat = [];

  for (let i = 0; i < rows; i++) {
    mat[i] = [];
    for (let j = 0; j < cols; j++) {
      mat[i][j] = readlineSync.questionInt("Enter the value: ");
    }
  }
  return mat;
}

export function matrixAddition(m1, m2) {
  const m3 = [];

  if (m1.length != m2.length || m1[0].length != m2[0].length) {
    console.log("dimensions don't match");
    return;
  }
  for (let i = 0; i < m1.length; i++) {
    m3[i] = [];
    for (let j = 0; j < m1[0].length; j++) {
      m3[i][j] = m1[i][j] + m2[i][j];
    }
  }
  return m3;
}

export function matrixSubtraction(m1, m2) {
  const m3 = [];

  if (m1.length != m2.length || m1[0].length != m2[0].length) {
    console.log("dimensions don't match");
    return;
  }
  for (let i = 0; i < m1.length; i++) {
    m3[i] = [];
    for (let j = 0; j < m1[0].length; j++) {
      m3[i][j] = m1[i][j] - m2[i][j];
    }
  }
  return m3;
}

export function printMatrix(inputMat) {
  for (let i = 0; i < inputMat.length; i++) {
    console.log(inputMat[i].join(" "));
  }
}

export function transposeMatrix(inputMat) {
  const m3 = new Array(inputMat[0].length);

  for (let i = 0; i < m3.length; i++) {
    m3[i] = new Array(inputMat.length);
  }
  for (let i = 0; i < inputMat.length; i++) {
    for (let j = 0; j < inputMat[0].length; j++) {
      m3[j][i] = inputMat[i][j];
    }
  }
  return m3;
}

export function traceMatrix(inputMat) {
  if (inputMat.length !== inputMat[0].length) {
    console.log("Invalid input:Your matrix must be of the same dimensions");
  } else {
    let sum = 0;
    for (let i = 0; i < inputMat.length; i++) {
      sum += inputMat[i][i];
    }
    console.log(sum);
  }
}

export function diagnolChalk(inputMat) {
  if (inputMat.length !== inputMat[0].length) {
    console.log("Invalid input:Your matrix must be of the same dimensions");
  } else {
    for (let i = 0; i < inputMat.length; i++) {
      inputMat[i][i] = chalk.blueBright(inputMat[i][i]);
    }
    for (let i = 0; i < inputMat.length; i++) {
      console.log(inputMat[i].join(" "));
    }
  }
}

