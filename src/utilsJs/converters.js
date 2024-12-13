import { doCalculation } from "./handlers.js";
import { operators } from "./operators.js";

export const getPriority = (operator) => {
  if (operator === "+" || operator === "-") {
    return 1;
  }
  return 2;
};

export const separateChunks = (equation) => {
  const separatedEquation = equation
    .match(/([+\-×÷%()]|-?\d+(\.\d+)?)/g)
    .map((chunk) => {
      if (!isNaN(chunk)) {
        return parseFloat(chunk);
      }
      return chunk;
    });
  return separatedEquation;
};

export const reverseNotation = (chunks) => {
  const operatorArr = [];
  const outputArr = [];

  for (let i = 0; i < chunks.length; i++) {
    const item = chunks[i];
    if (typeof item === "number") {
      outputArr.push(item);
    } else if (operators.includes(item)) {
      while (
        operatorArr.length &&
        getPriority(operatorArr[operatorArr.length - 1]) >= getPriority(item)
      ) {
        outputArr.push(operatorArr.pop());
      }
      operatorArr.push(item);
    }
  }
  for (let i = operatorArr.length - 1; i >= 0; i--) {
    outputArr.push(operatorArr[i]);
  }
  return outputArr;
};

export const estimateNotation = (notation) => {
  const resultCalc = [];

  for (let i = 0; i < notation.length; i++) {
    const item = notation[i];
    if (typeof item === "number") {
      resultCalc.push(item);
    } else if (operators.includes(item)) {
      const b = resultCalc.pop();
      const a = resultCalc.pop();
      const result = doCalculation(item, a, b);
      resultCalc.push(result);
    }
  }
  return resultCalc[0];
};
