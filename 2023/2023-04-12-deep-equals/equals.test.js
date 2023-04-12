"use strict";

const { expect, assert } = require("chai");
const { deepDotEquals } = require("./deepDotEquals");

class ObjectIdA {
  constructor(id) {
    this.id = id;
    this.someOtherProp = "asdf";
  }

  toString() {
    return this.id;
  }

  equals(otherObj) {
    return otherObj.toString() === this.toString();
  }
}

class ObjectIdB {
  constructor(id) {
    this.id = id;
    this.internalSpecificThing = "lgw3rj";
  }

  toString() {
    return this.id;
  }

  equals(otherObj) {
    return otherObj.toString() === this.toString();
  }
}

const throwToBool = (fn) => {
  try {
    fn();
    return true;
  } catch (_) {
    return false;
  }
};

const idA = new ObjectIdA(1);
const idB = new ObjectIdB(1);

console.log({
  "==": idA == idB,
  "===": idA == idB,
  ".equals": idA.equals(idB),
  "chai.assert.equal": throwToBool(() => assert.equal(idA, idB)),
  "chai.assert.strictEqual": throwToBool(() => assert.strictEqual(idA, idB)),
  "chai.assert.deepEqual": throwToBool(() => assert.deepEqual(idA, idB)),
  "chai.expect.deep.equal": throwToBool(() => expect(idA).to.deep.equal(idB)),
  //   deepDotEquals: deepDotEquals(idA, idB),
});

const otherProps = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
};

it("works", () => {
  // assert.deepEqual(idA, idB);
  // expect(idA).to.eql(idB);
  deepDotEquals(
    {
      nested: {
        id: new ObjectIdA(1),
      },
      other: "A",
      ...otherProps,
    },
    {
      nested: {
        id: new ObjectIdA(2),
      },
      other: "B",
      ...otherProps,
    }
  );
});
