import { expect } from "chai";
import { HashMap } from "./utils";

describe("1.0.hash-map", () => {
  it("found key", () => {
    const hashMap = new HashMap<any>(2);
    const jill = { name: "Jill McQuay", age: 38 };
    hashMap.set("dustin", { name: "Dustin McQuay", age: 38 });
    hashMap.set("jill", jill);
    hashMap.set("ella", { name: "Ella McQuay", age: 13 });
    expect(hashMap.get("jill")).to.eql(jill);
  });

  it("not found key", () => {
    const hashMap = new HashMap<any>(2);
    const jill = { name: "Jill McQuay", age: 38 };
    hashMap.set("dustin", { name: "Dustin McQuay", age: 38 });
    hashMap.set("jill", jill);
    hashMap.set("ella", { name: "Ella McQuay", age: 13 });
    expect(hashMap.get("bogus")).to.be.undefined;
  });
});
