class Failable {
  constructor(obj) {
    this.success = true;
    this.payload = undefined;
    this.metadata = {};
    this.error = undefined;
    Object.assign(this, obj);
  }

  map(fn) {
    if (!this.success) return this;
    return success(fn(this.payload));
  }

  getPayloadOrDefault(defaultValue) {
    return this.success ? this.payload : defaultValue;
  }
}

function success(payload, metadata = {}) {
  return new Failable({
    success: true,
    payload,
    metadata
  });
}

function failure(error, metadata = {}) {
  return new Failable({
    success: false,
    error,
    metadata
  });
}

module.exports = {
  Failable,
  success,
  failure
}