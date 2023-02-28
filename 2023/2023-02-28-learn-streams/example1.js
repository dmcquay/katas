const Stream = require("./stream");

const s1 = new Stream();

const merged = Stream.merge(s1, s1);

merged.subscribe({
  next: (...args) => {
    console.log({
      msg: "stream event received",
      data: args,
    });
  },
  error: (err) => {
    console.error(err);
  },
});

s1.next("msg1");
