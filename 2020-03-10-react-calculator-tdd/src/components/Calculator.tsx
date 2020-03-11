import React, { useState } from "react";

import "./Calculator.css";
import { CalculatorState, Operator } from "../types";
import {
  INITIAL_STATE,
  getDisplayText,
  appendToCurrentValue,
  setOperator,
  execute,
  clear
} from "../calculator";

export function CalculatorContainer() {
  const [state, setState] = useState(INITIAL_STATE);
  return (
    <Calculator
      state={state}
      onKeyPress={(key: string) => setState(s => appendToCurrentValue(key, s))}
      onSetOperator={(operator: Operator) =>
        setState(s => setOperator(operator, s))
      }
      onExecute={() => setState(execute)}
      onClear={() => setState(clear)}
    />
  );
}

interface CalculatorProps {
  state: CalculatorState;
  onKeyPress: Function;
  onSetOperator: Function;
  onExecute: Function;
  onClear: Function;
}

export function Calculator(props: CalculatorProps) {
  const { state, onKeyPress, onSetOperator, onExecute, onClear } = props;
  const displayText = getDisplayText(state);
  return (
    <div>
      <div className="calculator-display">{displayText}</div>
      <div className="calculator-numbers">
        <AppendToValueButton char={"7"} onKeyPress={onKeyPress} />
        <AppendToValueButton char={"8"} onKeyPress={onKeyPress} />
        <AppendToValueButton char={"9"} onKeyPress={onKeyPress} />
        <AppendToValueButton char={"4"} onKeyPress={onKeyPress} />
        <AppendToValueButton char={"5"} onKeyPress={onKeyPress} />
        <AppendToValueButton char={"6"} onKeyPress={onKeyPress} />
        <AppendToValueButton char={"1"} onKeyPress={onKeyPress} />
        <AppendToValueButton char={"2"} onKeyPress={onKeyPress} />
        <AppendToValueButton char={"3"} onKeyPress={onKeyPress} />
        <AppendToValueButton char={"0"} onKeyPress={onKeyPress} />
        <AppendToValueButton char={"."} onKeyPress={onKeyPress} />
        <button
          className="calculator-operator-button"
          onClick={() => onSetOperator(Operator.Add)}
        >
          +
        </button>
        <button
          className="calculator-operator-button"
          onClick={() => onExecute()}
        >
          =
        </button>
        <button
          className="calculator-operator-button"
          onClick={() => onClear()}
        >
          C
        </button>
      </div>
    </div>
  );
}

interface AppendToValueButtonProps {
  char: string;
  onKeyPress: Function;
}

export function AppendToValueButton(props: AppendToValueButtonProps) {
  const { char, onKeyPress } = props;
  return (
    <button
      className="calculator-number-button"
      onClick={() => onKeyPress(char)}
    >
      {char}
    </button>
  );
}
