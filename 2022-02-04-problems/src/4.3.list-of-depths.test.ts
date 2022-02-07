import { expect } from "chai";
import { BSTNode } from "./utils";

const buildLevelsFromBST = (
  n: BSTNode,
  levels?: number[][],
  currentDepth: number = 0
): number[][] => {
  if (levels === undefined) levels = [];

  if (levels[currentDepth] === undefined) {
    levels[currentDepth] = [];
  }
  levels[currentDepth].push(n.value);

  n.left && buildLevelsFromBST(n.left, levels, currentDepth + 1);
  n.right && buildLevelsFromBST(n.right, levels, currentDepth + 1);

  return levels;
};

describe("4.3.list-of-depths", () => {
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

    const expected = [[8], [4, 12], [2, 5, 10]];
    const actual = buildLevelsFromBST(root);
    expect(actual).to.eql(expected);
  });
});
