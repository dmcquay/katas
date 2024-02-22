const reject = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("rejected"));
    }, 1);
  });
};

const throwWrapper = async () => {
  try {
    await reject();
  } catch (err) {
    // this doesn't work
    // throw err;

    // throw new Error is key. if reject, no stack trace. if throw prev error, no stack trace.
    // throw new Error(err.message);

    // this works too
    return Promise.reject(new Error(err.message));

    // apparently the important thing is to construct a new Error NOT in a callback
  }
};

const intermediateFnWithUsingAwait = async () => {
  await reject();
};

const intermediateFnWithUsingAwaitCallingThrowWrapper = async () => {
  await throwWrapper();
};

const intermediateFnThatInterruptsTheStack = () => {
  // this does not interrupt. then is fine
  //   return throwWrapper().then((x) => "other");

  return throwWrapper().catch((err) => {
    return err;
  });
};

(async function outer() {
  try {
    await reject();
  } catch (err) {
    console.log("\nawait with try/catch of a rejection");
    console.error(err);
  }

  reject().catch((err) => {
    console.log("\nUsing .catch(err) instead of try/catch");
    console.error(err);
  });

  try {
    await intermediateFnWithUsingAwait();
  } catch (err) {
    console.log("\nintermediateFnWithUsingAwait");
    console.error(err);
  }

  try {
    await intermediateFnWithUsingAwaitCallingThrowWrapper();
  } catch (err) {
    console.log("\nintermediateFnWithUsingAwaitCallingThrowWrapper");
    console.error(err);
  }

  try {
    await intermediateFnThatInterruptsTheStack();
  } catch (err) {
    console.log("\nintermediateFnThatInterruptsTheStack");
    console.error(err);
  }
})();
