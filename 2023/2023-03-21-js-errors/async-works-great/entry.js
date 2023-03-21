const { fnThatCallsFnThatThrows } = require("./lib");

const main = async () => {
  await fnThatCallsFnThatThrows();
};

(async function outer() {
  try {
    await main();
  } catch (err) {
    console.error(err);
  }
})();
