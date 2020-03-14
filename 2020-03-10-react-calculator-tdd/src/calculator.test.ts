import { Operator, CalculatorState } from "./types";
import {
  INITIAL_STATE,
  appendToCurrentValue,
  setOperator,
  toggleSign,
  clear,
  execute,
  getDisplayText
} from "./calculator";

describe("appendToCurrentValue", () => {
  test("when a number is entered, that number is set as the current value", () => {
    const newState = appendToCurrentValue("1", INITIAL_STATE);
    const expectedState = {
      ...INITIAL_STATE,
      currentValue: "1"
    };
    expect(newState).toEqual(expectedState);
  });

  test("when a number is entered and currentValue is non-empty, that number is appended to the current value", () => {
    const initialState = {
      ...INITIAL_STATE,
      currentValue: "1"
    };
    const newState = appendToCurrentValue("2", initialState);
    const expectedState = {
      ...INITIAL_STATE,
      currentValue: "12"
    };
    expect(newState).toEqual(expectedState);
  });

  test("when a number less than 0 is entered, an exception is thrown", () => {
    const fn = () => appendToCurrentValue("-1", INITIAL_STATE);
    expect(fn).toThrow();
  });

  test("when a number greater than 9 is entered, an exception is thrown", () => {
    const fn = () => appendToCurrentValue("10", INITIAL_STATE);
    expect(fn).toThrow();
  });

  test("when a period is entered and currentValue is a non-zero digit, it appends the period", () => {
    const initialState = {
      ...INITIAL_STATE,
      currentValue: "1"
    };
    const newState = appendToCurrentValue(".", initialState);
    const expectedState = {
      ...INITIAL_STATE,
      currentValue: "1."
    };
    expect(newState).toEqual(expectedState);
  });

  test("when a period is entered and currentValue already has a period, it is ignored", () => {
    const initialState = {
      ...INITIAL_STATE,
      currentValue: "1."
    };
    const newState = appendToCurrentValue(".", initialState);
    const expectedState = {
      ...INITIAL_STATE,
      currentValue: "1."
    };
    expect(newState).toEqual(expectedState);
  });

  test("when a digit is entered after a period, it is append as usual", () => {
    const initialState = {
      ...INITIAL_STATE,
      currentValue: "1."
    };
    const newState = appendToCurrentValue("2", initialState);
    const expectedState = {
      ...INITIAL_STATE,
      currentValue: "1.2"
    };
    expect(newState).toEqual(expectedState);
  });
});

describe("setOperator", () => {
  test("when currentValue is non-empty, the operator is set, currentValue is copied to operand and currentValue is cleared", () => {
    const initialState = {
      ...INITIAL_STATE,
      currentValue: "1"
    };
    const newState = setOperator(Operator.Add, initialState);
    const expectedState = {
      ...INITIAL_STATE,
      currentValue: "",
      operator: Operator.Add,
      operand: "1"
    };
    expect(newState).toEqual(expectedState);
  });

  test("when operator is already set, execute current operation first", () => {
    const initialState = {
      ...INITIAL_STATE,
      operand: "4",
      currentValue: "2",
      operator: Operator.Add
    };
    const newState = setOperator(Operator.Subtract, initialState);
    const expectedState = {
      ...INITIAL_STATE,
      currentValue: "",
      operator: Operator.Subtract,
      operand: "6"
    };
    expect(newState).toEqual(expectedState);
  });
});

describe("toggleSign", () => {
  test("when currentValue is positive, makes it negative", () => {
    expect(
      toggleSign({
        ...INITIAL_STATE,
        currentValue: "123"
      })
    ).toEqual({
      ...INITIAL_STATE,
      currentValue: "-123"
    });
  });

  test("when currentValue is negative, makes it positive", () => {
    expect(
      toggleSign({
        ...INITIAL_STATE,
        currentValue: "-123"
      })
    ).toEqual({
      ...INITIAL_STATE,
      currentValue: "123"
    });
  });
});

describe("clear", () => {
  test("clear should set currentValue to blank, but leave operator and operand alone", () => {
    const state = {
      ...INITIAL_STATE,
      currentValue: "1",
      operand: "2",
      operator: Operator.Add
    };
    const newState = clear(state);
    const expectedState = {
      ...INITIAL_STATE,
      currentValue: "",
      operand: "2",
      operator: Operator.Add
    };
    expect(newState).toEqual(expectedState);
  });
});

describe("execute", () => {
  function happyPath(
    operator: Operator,
    operand1: string,
    operand2: string,
    result: string
  ) {
    test(`happy path execute: ${operand1} ${operator} ${operand2} = ${result}`, () => {
      const initialState = {
        ...INITIAL_STATE,
        operand: operand1,
        currentValue: operand2,
        operator
      };
      const newState = execute(initialState);
      const expectedState = {
        ...INITIAL_STATE,
        currentValue: result,
        operator: Operator.None,
        operand: ""
      };
      expect(newState).toEqual(expectedState);
    });
  }

  happyPath(Operator.Add, "1", "2", "3");
  happyPath(Operator.Subtract, "5", "2", "3");
  happyPath(Operator.Multiply, "2", "3", "6");
  happyPath(Operator.Divide, "6", "2", "3");
  happyPath(Operator.Divide, "6.4", "2", "3.2");
});

describe("getDisplayText", () => {
  test("generally displays currentValue", () => {
    const state: CalculatorState = {
      ...INITIAL_STATE,
      currentValue: "6.2"
    };
    const displayText = getDisplayText(9, state);
    expect(displayText).toEqual("6.2");
  });

  test("displays operand if currentValue is blank", () => {
    const state: CalculatorState = {
      ...INITIAL_STATE,
      currentValue: "",
      operand: "3"
    };
    const displayText = getDisplayText(9, state);
    expect(displayText).toEqual("3");
  });

  test("when currentValue and operand are both blank, displays zero", () => {
    expect(
      getDisplayText(9, {
        ...INITIAL_STATE,
        currentValue: "",
        operand: ""
      })
    ).toEqual("0");
  });

  test("when currentValue is a decimal that exceeds maxLength, it rounds the value as needed", () => {
    expect(
      getDisplayText(4, {
        ...INITIAL_STATE,
        currentValue: "6.234"
      })
    ).toEqual("6.23");
    expect(
      getDisplayText(4, {
        ...INITIAL_STATE,
        currentValue: "6.235"
      })
    ).toEqual("6.24");
    expect(
      getDisplayText(3, {
        ...INITIAL_STATE,
        currentValue: "6.235"
      })
    ).toEqual("6.2");
    expect(
      getDisplayText(5, {
        ...INITIAL_STATE,
        currentValue: "64.235"
      })
    ).toEqual("64.24");
  });

  test("when currentValue is a negative decimal that exceeds maxLength, it rounds the value as needed", () => {
    expect(
      getDisplayText(5, {
        ...INITIAL_STATE,
        currentValue: "-6.234"
      })
    ).toEqual("-6.23");
  });

  test("when currentValue is an negative decimal that exceeds maxLength, it rounds the value as needed", () => {
    expect(
      getDisplayText(5, {
        ...INITIAL_STATE,
        currentValue: "-6.234"
      })
    ).toEqual("-6.23");
  });

  test("when currentValue is an integer that exceeds maxLength, it returns TOO BIG", () => {
    expect(
      getDisplayText(6, {
        ...INITIAL_STATE,
        currentValue: "1234567"
      })
    ).toEqual("TOO BIG");
  });
});

export {};
