const one = require("./one.subtest");
const two = require("./two.subtest");

describe("2 - manual imports with wrapped tests", () => {
  before(() => {
    console.log("    before");
  });

  after(() => {
    console.log("    after");
  });

  one();
  two();
});
