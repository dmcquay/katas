import { expect } from "chai";
import { lengthOfLongestSubstring } from "./longest-unique-string";

describe("#lengthOfLongestSubstring", () => {
  it("ohomm = 3", () => {
    expect(lengthOfLongestSubstring("ohomm")).to.eq(3);
  });

  it("aabaab!bb = 3", () => {
    expect(lengthOfLongestSubstring("aabaab!bb")).to.eq(3);
  });
});
