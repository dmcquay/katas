import { expect } from "chai";

const arePermutations = (a: string, b: string): boolean => {
  const counts: Record<string, number> = {};

  if (a.length !== b.length) return false;

  for (let i = 0; i < a.length; i++) {
    if (counts[a[i]] === undefined) counts[a[i]] = 1;
    else counts[a[i]]++;
  }

  for (let i = 0; i < b.length; i++) {
    if (counts[b[i]] === undefined || counts[b[i]] === 0) return false;
    else counts[b[i]]--;
  }

  return Object.values(counts).find((x) => x > 0) === undefined;
};

describe("1.2", () => {
  it("not permutations", () => {
    expect(arePermutations("dod", "god")).to.be.false;
  });

  it("permutations", () => {
    expect(arePermutations("dog", "god")).to.be.true;
  });

  it("different lengths optimization", () => {
    expect(arePermutations("doda", "god")).to.be.false;
  });
});
