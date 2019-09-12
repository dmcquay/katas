"use strict";

const {
  getUniuqeCandyCountIfHalfRemoved,
  isKPalindrome
} = require("./solution");
const { expect } = require("chai");

describe("#getUniuqeCandyCountIfHalfRemoved", () => {
  const tests = [
    [[3, 4, 7, 7, 6, 6], 3],
    [[80, 80, 1000000000, 80, 80, 80, 80, 80, 80, 123456789], 3],
    [[1, 1, 1, 1], 1],
    [[1, 2, 3, 4], 2],
    [[1000000000, 100000000, 99999999, 20000000], 2],
    [[1, 2], 1],
    [[], 0]
  ];

  for (let [input, output] of tests) {
    it(`${input} should be ${output}`, () => {
      expect(getUniuqeCandyCountIfHalfRemoved(input)).to.eql(output);
    });
  }
});

describe("#isKPalindrome", () => {
  const tests = [
    [["a", 0], true],
    [["a", 1], true],
    [["ab", 0], false],
    [["ab", 1], true],
    [["ab", 1], true],
    [["aba", 0], true],
    [["abba", 0], true],
    [["abbca", 1], true],
    [["aasbdbca", 4], true]
  ];

  for (let [input, output] of tests) {
    it(`${input} should be ${output}`, () => {
      expect(isKPalindrome(...input)).to.eql(output);
    });
  }
});
