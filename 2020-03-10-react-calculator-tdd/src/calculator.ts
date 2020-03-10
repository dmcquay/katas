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
  if (!/^[0-9\.]$/.test(char)) throw new Error(validCharMessage);
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
  return {
    ...state,
    currentValue: "",
    operand: state.currentValue,
    operator
  };
}

export function execute(state: CalculatorState): CalculatorState {
  return {
    ...state,
    currentValue: parseInt(state.operand) + parseInt(state.currentValue) + "",
    operand: "",
    operator: Operator.None
  };
}
