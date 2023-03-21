const { fnThatCallsFnThatThrows } = require("./lib");

const main = () => {
  fnThatCallsFnThatThrows();
};

try {
  main();
} catch (err) {
  console.error(err);
}
