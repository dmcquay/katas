# Learnings

Stack traces are ordered from leaf nodes to root nodes. e.g. if A call B and B throws, B will be listed first in the stack trace.

The requirement to get a good stack trace is that new Error must not be in a callback.

```js
const fnThatThrows = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("it failed"));
    }, 1);
  });
};
```

If you call the above function with async await, no matter what you do, the only line number you will get is from the reject call on line 4.

```js
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
```

By wrapping the problematic call with await + try/catch and constructing a new Error, we will now get a nice stack trace. Note that the stack trace will not include the original line 5 reject call. It will start on line 9 instead.

Use of Promise.then, Promise.catch, returning Promise.reject, etc are all fine. Just don't call new Error inside of a callback.
