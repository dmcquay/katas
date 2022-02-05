import { expect } from "chai";

const s2a = (input: string, extra: number): Uint16Array => {
  // note: assumes no 5 byte chars, only 2 byte chars
  const arr = new Uint16Array(input.length + extra);
  for (let i = 0; i < input.length; i++) {
    arr[i] = input.charCodeAt(i);
  }
  return arr;
};

const a2s = (input: Uint16Array): string => {
  let result = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i] === 0) return result;
    result += String.fromCharCode(input[i]);
  }
  return result;
};

const CHAR_CODE_SPACE = " ".charCodeAt(0);
const CHAR_CODE_PERCENT = "%".charCodeAt(0);
const CHAR_CODE_TWO = "2".charCodeAt(0);
const CHAR_CODE_ZERO = "0".charCodeAt(0);

const urlify = (input: Uint16Array, trueLength: number): Uint16Array => {
  const spaceCount = input.filter((x) => x === CHAR_CODE_SPACE).length;
  let newIdx = trueLength + spaceCount * 2 - 1;
  for (let i = trueLength - 1; i >= 0; i--) {
    if (input[i] === CHAR_CODE_SPACE) {
      input[newIdx] = CHAR_CODE_ZERO;
      newIdx--;
      input[newIdx] = CHAR_CODE_TWO;
      newIdx--;
      input[newIdx] = CHAR_CODE_PERCENT;
      newIdx--;
    } else {
      input[newIdx] = input[i];
      newIdx--;
    }
  }
  return input;
};

describe("1.3", () => {
  it("works", () => {
    const actual = urlify(s2a("Hello world!", 3), 12);
    const expected = s2a("Hello%20world!", 1);
    expect(actual).to.eql(expected);
  });
});
