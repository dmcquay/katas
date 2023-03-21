const { fnThatCallsFnThatThrows } = require("./lib");

const main = async () => {
  await fnThatCallsFnThatThrows();
};

// try {
//   main().catch((err) => {
//     console.error(err);
//   });
// } catch (err) {
//   console.error(err);
// }

(async function outer() {
  try {
    await main();
  } catch (err) {
    console.error(err);
  }
})();
