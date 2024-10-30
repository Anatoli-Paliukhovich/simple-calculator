import { combineCalc } from "../index.js";
import { operators } from "./operators.js";

export const doCalculation = (operator, a, b) => {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "×":
      return a * b;
    case "÷":
      return a / b;
    case "%":
      if (!a) {
        return b / 100;
      }
      return a * (b / 100);
    default:
      return a, b;
  }
};

export const handleEqual = (str) => {
  if (str.length > 0 && str !== "0" && str !== "=") {
    str = combineCalc(str).toString();
    if (str === "NaN" || str === "Infinity") {
      return { result: "Invalid operation", error: true };
    } else {
      return { result: str.slice(0, 12), error: false };
    }
  }
  return { result: str, error: false };
};

export const handleAC = () => {
  return "0";
};

export const handleDot = (str) => {
  if (str === "0") {
    return "0.";
  } else if (!str.endsWith(".")) {
    const lastChar = str[str.length - 1];
    if (!operators.includes(lastChar)) {
      return str + ".";
    }
  }
  return str;
};

export const handleSignChange = (str) => {
  if (str) {
    const lastNumberMatch = str.match(/(-?\d+\.?\d*)$/);
    if (lastNumberMatch) {
      const lastNumber = lastNumberMatch[0];
      const newSignNumber = lastNumber.startsWith("-")
        ? `-(${lastNumber})`
        : `(-${lastNumber})`;
      return str.slice(0, -lastNumber.length) + newSignNumber;
    }
  }
  return str;
};

export const handleDefault = (str, value) => {
  if (str === "0" && operators.includes(value)) {
    return str;
  }
  if (str === "0") {
    return value;
  } else {
    const lastChar = str[str.length - 1];
    if (operators.includes(lastChar) && operators.includes(value)) {
      return str.slice(0, -1) + value;
    } else if (str.length < 15) {
      return str + value;
    }
  }
  return str;
};
