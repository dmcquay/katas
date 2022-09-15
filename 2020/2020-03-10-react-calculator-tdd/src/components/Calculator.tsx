import React, { useState } from "react";

import "./Calculator.css";
import { CalculatorState, Operator } from "../types";
import {
  INITIAL_STATE,
  getDisplayText,
  appendToCurrentValue,
  setOperator,
  toggleSign,
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
      onToggleSign={() => setState(toggleSign)}
      onExecute={() => setState(execute)}
      onClear={() => setState(clear)}
    />
  );
}

interface CalculatorProps {
  state: CalculatorState;
  onKeyPress: Function;
  onSetOperator: Function;
  onToggleSign: Function;
  onExecute: Function;
  onClear: Function;
}

export function Calculator(props: CalculatorProps) {
  const {
    state,
    onKeyPress,
    onSetOperator,
    onToggleSign,
    onExecute,
    onClear
  } = props;
  const displayText = getDisplayText(10, state);
  return (
    <div className="calculator-container">
      <div className="calculator-display">{displayText}</div>

      <button
        className="calculator-button calculator-button-function"
        onClick={() => onClear()}
      >
        C
      </button>
      <button
        className="calculator-button calculator-button-function"
        onClick={() => onToggleSign()}
      >
        +/-
      </button>
      <button className="calculator-button calculator-button-function">
        %
      </button>
      <button
        className="calculator-button calculator-button-operator"
        onClick={() => onSetOperator(Operator.Divide)}
      >
        /
      </button>

      <AppendToValueButton char={"7"} onKeyPress={onKeyPress} />
      <AppendToValueButton char={"8"} onKeyPress={onKeyPress} />
      <AppendToValueButton char={"9"} onKeyPress={onKeyPress} />
      <button
        className="calculator-button calculator-button-operator"
        onClick={() => onSetOperator(Operator.Multiply)}
      >
        X
      </button>

      <AppendToValueButton char={"4"} onKeyPress={onKeyPress} />
      <AppendToValueButton char={"5"} onKeyPress={onKeyPress} />
      <AppendToValueButton char={"6"} onKeyPress={onKeyPress} />
      <button
        className="calculator-button calculator-button-operator"
        onClick={() => onSetOperator(Operator.Subtract)}
      >
        -
      </button>

      <AppendToValueButton char={"1"} onKeyPress={onKeyPress} />
      <AppendToValueButton char={"2"} onKeyPress={onKeyPress} />
      <AppendToValueButton char={"3"} onKeyPress={onKeyPress} />
      <button
        className="calculator-button calculator-button-operator"
        onClick={() => onSetOperator(Operator.Add)}
      >
        +
      </button>

      <AppendToValueButton
        className="calculator-button-zero"
        char={"0"}
        onKeyPress={onKeyPress}
      />
      <AppendToValueButton char={"."} onKeyPress={onKeyPress} />
      <button
        className="calculator-button calculator-button-operator"
        onClick={() => onExecute()}
      >
        =
      </button>
    </div>
  );
}

interface AppendToValueButtonProps {
  char: string;
  onKeyPress: Function;
  className?: string;
}

export function AppendToValueButton(props: AppendToValueButtonProps) {
  const { char, onKeyPress, className } = props;
  return (
    <button
      className={`calculator-button ${className}`}
      onClick={() => onKeyPress(char)}
    >
      {char}
    </button>
  );
}
