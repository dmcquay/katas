import { expect } from "chai";
import { LinkedList } from "./utils";

describe("1.0.linked-list", () => {
  it("works", () => {
    const list = LinkedList.from(["one", "two", "three"]);
    list.remove("two");

    const expected = LinkedList.from(["one", "three"]);

    expect(list).to.eql(expected);
  });
});
