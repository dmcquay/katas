export interface CalculatorState {
  currentValue: string;
  operator: Operator;
  operand: string;
}

export enum Operator {
  None = "None",
  Add = "Add",
  Subtract = "Subtract",
  Multiply = "Multiply",
  Divide = "Divide"
}
