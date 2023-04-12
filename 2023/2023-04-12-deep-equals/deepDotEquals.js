"use strict";

const { expect } = require("chai");
const R = require("ramda");

function _enumeratePaths(obj, base = []) {
  return Object.keys(obj).flatMap((key) => {
    if (typeof obj[key] === "object" && typeof obj[key].equals !== "function") {
      return [..._enumeratePaths(obj[key], [...base, key]), [...base, key]];
    } else {
      return [[...base, key]];
    }
  });
}

function deepDotEquals(obj1, obj2) {
  const paths = _enumeratePaths(obj1);
  const pathsWithEquals = paths.filter(
    (p) => typeof R.path(p, obj1).equals === "function"
  );
  let obj1Clone = R.clone(obj1);
  let obj2Clone = R.clone(obj2);
  for (const p of pathsWithEquals) {
    if (!R.path(p, obj1).equals(R.path(p, obj2))) {
      throw new Error(`mismatch using .equals method of path ${p.join(".")}`);
    }
    obj1Clone = R.set(R.lensPath(p), undefined, obj1Clone);
    obj2Clone = R.set(R.lensPath(p), undefined, obj2Clone);
  }
  expect(obj1Clone).to.eql(obj2Clone);
}

module.exports = { deepDotEquals, _enumeratePaths };
