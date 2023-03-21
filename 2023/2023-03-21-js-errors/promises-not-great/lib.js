const fnThatThrows = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("it failed"));
    }, 1);
  });
};

const results = [];

const fnThatCallsFnThatThrows = async () => {
  const result = await fnThatThrows();
  results.push(result);
};

module.exports = {
  fnThatThrows,
  fnThatCallsFnThatThrows,
};
