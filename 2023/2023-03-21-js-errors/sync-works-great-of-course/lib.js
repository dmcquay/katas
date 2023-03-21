const fnThatThrows = () => {
  throw new Error("it failed");
};

const fnThatCallsFnThatThrows = () => {
  fnThatThrows();
};

module.exports = {
  fnThatThrows,
  fnThatCallsFnThatThrows,
};
