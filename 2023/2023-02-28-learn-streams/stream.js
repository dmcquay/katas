let id = 0;

class Stream {
  constructor() {
    this.id = ++id;
    this.listeners = [];
  }

  next(v) {
    this.listeners.forEach((listener) => {
      try {
        listener.next(v);
      } catch (error) {
        this.error(error);
      }
    });
  }

  error(err) {
    if (this.listeners.length === 0) {
      setImmediate(() => {
        throw err;
      });
    }
    this.listeners.forEach((listener) => {
      try {
        listener.error(err);
      } catch (error) {
        // Crash if there's an error in the error handler
        setImmediate(() => {
          throw error;
        });
      }
    });
  }

  filter(fn) {
    const s = new Stream();
    this.listeners.push({
      next: wrap((v) => fn(v) && s.next(v), s),
      error: (err) => s.error(err),
    });
    return s;
  }

  map(fn) {
    const s = new Stream();
    this.listeners.push({
      next: wrap((v) => s.next(fn(v)), s),
      error: (err) => s.error(err),
    });
    return s;
  }

  subscribe(handlers) {
    if (typeof handlers === "function") {
      throw new Error("handlers must be an object");
    }
    let { next, error } = handlers;
    next = next || (() => {});
    error =
      error ||
      ((err) => {
        throw err;
      });
    const handler = { next, error };
    this.listeners.push(handler);

    return () => {
      this.listeners = this.listeners.filter((v) => v !== handler);
    };
  }

  static merge() {
    const ret = new Stream();
    const streams = Array.isArray(arguments[0])
      ? arguments[0]
      : Array.prototype.slice.call(arguments);
    for (const s of streams) {
      s.subscribe({
        next: (v) => ret.next(v),
        error: (err) => ret.error(err),
      });
    }
    return ret;
  }
}

const wrap = (fn, stream) => (v) => {
  try {
    return fn(v);
  } catch (error) {
    stream.error(error);
  }
};

module.exports = Stream;
