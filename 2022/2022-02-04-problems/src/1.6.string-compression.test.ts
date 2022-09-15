import { expect } from "chai";

const compress = (input: string): string => {
  let output = "";
  let prevChar = input[0];
  let count = 1;
  for (let i = 1; i <= input.length; i++) {
    if (input[i] === prevChar) {
      count++;
    } else {
      output += prevChar + count;
      count = 1;
      prevChar = input[i];
    }
  }
  return input.length < output.length ? input : output;
};

describe("1.6.string-compression", () => {
  it("no compression", () => {
    expect(compress("a")).to.eql("a");
  });

  it("with compression", () => {
    expect(compress("aabbb")).to.eql("a2b3");
  });
});
