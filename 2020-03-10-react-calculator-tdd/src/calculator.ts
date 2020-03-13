import { CalculatorState, Operator } from "./types";

export const INITIAL_STATE: CalculatorState = {
  currentValue: "",
  operand: "",
  operator: Operator.None
};

export function appendToCurrentValue(
  char: string,
  state: CalculatorState
): CalculatorState {
  const validCharMessage = "Digit value must be 0-9";
  if (!/^[0-9.]$/.test(char)) throw new Error(validCharMessage);
  if (char === "." && state.currentValue.includes(".")) return state;
  return {
    ...state,
    currentValue: state.currentValue + char
  };
}

export function setOperator(
  operator: Operator,
  state: CalculatorState
): CalculatorState {
  if (state.operator !== Operator.None) {
    state = execute(state);
  }
  return {
    ...state,
    currentValue: "",
    operand: state.currentValue,
    operator
  };
}

export function clear(state: CalculatorState): CalculatorState {
  return {
    ...state,
    currentValue: ""
  };
}

export function execute(state: CalculatorState): CalculatorState {
  const operand1 = parseFloat(state.operand);
  const operand2 = parseFloat(state.currentValue);
  let result: number = 0;

  if (state.operator === Operator.Add) result = operand1 + operand2;
  else if (state.operator === Operator.Subtract) result = operand1 - operand2;
  else if (state.operator === Operator.Multiply) result = operand1 * operand2;
  else if (state.operator === Operator.Divide) result = operand1 / operand2;

  return {
    ...state,
    currentValue: result.toString(),
    operand: "",
    operator: Operator.None
  };
}

export function getDisplayText(
  maxLength: number,
  state: CalculatorState
): string {
  if (state.currentValue === "" && state.operand === "") return "0";
  const val = state.currentValue === "" ? state.operand : state.currentValue;

  if (val.length <= maxLength) {
    return val;
  } else if (val.includes(".")) {
    const factor = Math.pow(10, maxLength - val.indexOf(".") - 1);
    return (Math.round(parseFloat(val) * factor) / factor).toString();
  } else {
    return "TOO BIG";
  }
}
