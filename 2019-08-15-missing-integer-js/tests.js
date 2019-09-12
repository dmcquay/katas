"use strict";

const solution = require("./solution");
const { expect } = require("chai");

it("[1,2] should be 3", () => {
  expect(solution([1, 2])).to.equal(3);
});

it("[1,3] should be 2", () => {
  expect(solution([1, 3])).to.equal(2);
});

it("[2,1] should be 3", () => {
  expect(solution([2, 1])).to.equal(3);
});

it("[-10, -11] should be 1", () => {
  expect(solution([-10, -11])).to.equal(1);
});

it("[-10, -12] should be 1", () => {
  expect(solution([-10, -12])).to.equal(1);
});

it("[-100000 .. 100000, 100002] should be 1000001 and should complete in < 100 ms", () => {
  const nums = [];
  for (let i = -100000; i <= 100000; i++) {
    nums.push(i);
  }
  nums.push(100002);
  const start = Date.now();
  const result = solution(nums);
  const duration = Date.now() - start;
  expect(result).to.equal(100001);
  expect(duration).to.be.lessThan(30);
});

it("[1] should be 2", () => {
  expect(solution([1])).to.equal(2);
});

it("[2] should be 1", () => {
  expect(solution([2])).to.equal(1);
});

it("[3] should be 1", () => {
  expect(solution([3])).to.equal(1);
});

it("[4] should be 1", () => {
  expect(solution([4])).to.equal(1);
});
