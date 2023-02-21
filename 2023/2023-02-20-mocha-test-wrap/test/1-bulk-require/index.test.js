const bulkRequire = require("bulk-require");

describe("1 - bulk require", () => {
  before(() => {
    console.log("    before");
  });

  after(() => {
    console.log("    after");
  });

  bulkRequire(__dirname, ["*.subtest.js"]);
});
