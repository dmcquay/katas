const fnThatThrows = async () => {
  try {
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error("it failed"));
      }, 1);
    });
  } catch (err) {
    throw new Error(err.message);
  }
};

const fnThatCallsFnThatThrows = async () => {
  await fnThatThrows();
};

module.exports = {
  fnThatThrows,
  fnThatCallsFnThatThrows,
};
