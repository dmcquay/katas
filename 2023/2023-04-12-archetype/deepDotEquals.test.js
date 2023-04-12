"use strict";

const { expect } = require("chai");
const {
  deepDotEquals,
  _enumeratePaths,
  DotEqualsAssertionError,
} = require("./deepDotEquals");

class ObjId {
  constructor(id) {
    this.id = id;
    this.privateProp = Math.random();
  }

  equals(otherObj) {
    return otherObj.id === this.id;
  }
}

describe("deepDotEquals", () => {
  describe("_enumeratePaths", () => {
    it("returns all paths", () => {
      expect(_enumeratePaths({ a: 1, b: { c: 2 } })).to.eql([
        ["a"],
        ["b", "c"],
        ["b"],
      ]);
    });

    it("excludes child paths of objects that have an equals method", () => {
      expect(_enumeratePaths({ a: 1, b: new ObjId(2) })).to.eql([["a"], ["b"]]);
    });
  });

  it("should not throw when ids match", () => {
    const id1 = new ObjId(1);
    const id2 = new ObjId(1);
    expect(() => deepDotEquals({ id: id1 }, { id: id2 })).to.not.throw();
  });

  it("should throw a dotequals mismatch error when ids don't match", () => {
    const id1 = new ObjId(1);
    const id2 = new ObjId(2);
    expect(() => deepDotEquals({ id: id1 }, { id: id2 })).to.throw("mismatch");
  });

  it("should throw a chai assertion error when something else doesn't match", () => {
    const id1 = new ObjId(1);
    const id2 = new ObjId(1);
    expect(() =>
      deepDotEquals({ id: id1, name: "A" }, { id: id2, name: "B" })
    ).to.throw("expected");
  });
});
