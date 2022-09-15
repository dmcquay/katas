const fizzBuzz = require("./fizzbuzz");

test("1 is 1", () => {
  expect(fizzBuzz(1)).toEqual(1);
});

test("2 is 2", () => {
  expect(fizzBuzz(2)).toEqual(2);
});

test("3 is fizz", () => {
  expect(fizzBuzz(3)).toEqual("fizz");
});

test("4 is 4", () => {
  expect(fizzBuzz(4)).toEqual(4);
});

test("5 is buzz", () => {
  expect(fizzBuzz(5)).toEqual("buzz");
});
