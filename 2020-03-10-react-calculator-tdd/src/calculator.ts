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

export function getDisplayText(state: CalculatorState): string {
  if (state.currentValue === "") return state.operand;
  return state.currentValue;
}
