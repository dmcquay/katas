import { expect } from "chai";
import { BSTNode } from "./utils";

/*
 * Assuming balanced
 * Best/Worst case time: O(log n)
 */

const getMaxAndValidateBST = (n: BSTNode): number => {
  if (n.left) {
    const leftMax = getMaxAndValidateBST(n.left);
    if (leftMax >= n.value) throw new Error("Left is >= current");
  }

  if (n.right) {
    const rightMax = getMaxAndValidateBST(n.right);
    if (rightMax <= n.value) throw new Error("Right is <= current");
    return rightMax;
  }

  return n.value;
};

const isValidBST = (n: BSTNode): boolean => {
  try {
    getMaxAndValidateBST(n);
    return true;
  } catch (err) {
    return false;
  }
};

describe("4.5.validate-bst", () => {
  it("works", () => {
    const root: BSTNode = {
      value: 8,
      left: {
        value: 4,
        left: {
          value: 2,
        },
        right: {
          value: 5,
        },
      },
      right: {
        value: 12,
        left: {
          value: 10,
        },
      },
    };

    expect(isValidBST(root)).to.be.true;
  });

  it("directly invalid", () => {
    const root: BSTNode = {
      value: 5,
      left: {
        value: 6,
      },
    };

    expect(isValidBST(root)).to.be.false;
  });

  it("indirectly invalid", () => {
    const root: BSTNode = {
      value: 5,
      left: {
        value: 4,
        right: {
          value: 6,
        },
      },
    };

    expect(isValidBST(root)).to.be.false;
  });
});
