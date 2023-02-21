const setup = (cb) => {
  describe("3 - setup function", () => {
    before(() => {
      console.log("    before");
    });

    after(() => {
      console.log("    after");
    });

    cb();
  });
};

module.exports = {
  setup,
};
