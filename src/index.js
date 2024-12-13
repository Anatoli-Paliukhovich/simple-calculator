import "./css/style.css";
import "./utilsJs/theme.js";
import {
  handleAC,
  handleDot,
  handleEqual,
  handleSignChange,
  handleDefault,
} from "./utilsJs/handlers.js";
import {
  separateChunks,
  reverseNotation,
  estimateNotation,
} from "./utilsJs/converters.js";
import { operators } from "./utilsJs/operators.js";

const calcInput = document.querySelector(".calc__result");
const calcBody = document.querySelector(".calc__body");
let str = "0";
let error = false;

export const combineCalc = (equation) => {
  const chunks = separateChunks(equation);
  const notation = reverseNotation(chunks);
  const result = estimateNotation(notation);
  return result;
};

calcBody.addEventListener("click", function (event) {
  const target = event.target;

  if (target.classList.contains("calc__btn")) {
    const value = target.innerHTML;

    if (error) {
      if (value === "AC") {
        str = handleAC();
        error = false;
      } else if (
        value !== "=" &&
        !operators.includes(value) &&
        !".".includes(value)
      ) {
        str = value;
        error = false;
      }
    } else {
      switch (value) {
        case "=":
          const result = handleEqual(str);
          str = result.result;
          error = result.error;
          break;
        case "AC":
          str = handleAC();
          break;
        case ".":
          str = handleDot(str);
          break;
        case "+/-":
          str = handleSignChange(str);
          break;
        default:
          str = handleDefault(str, value);
          break;
      }
    }

    calcInput.innerHTML = str;
  }
});
