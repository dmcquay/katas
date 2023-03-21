const externalFn = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("it failed"));
    }, 1);
  });
};

const fnThatThrows = async () => {
  try {
    await externalFn();
  } catch (err) {
    throw new Error("seconddary thrown error");
  }
};

const fnThatCallsFnThatThrows = async () => {
  await fnThatThrows();
};

module.exports = {
  fnThatThrows,
  fnThatCallsFnThatThrows,
};
