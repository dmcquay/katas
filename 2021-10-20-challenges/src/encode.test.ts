import { expect } from "chai";
import { decode, encode } from "./encode";

describe("encode", () => {
  it("qualify and delimit", () => {
    expect(encode(["a", "b"])).to.eq('"a","b"');
  });

  it("escape", () => {
    expect(encode([`a"`, `b"c"d`])).to.eq(`"a\\"","b\\"c\\"d"`);
  });

  it("escaped escape char", () => {
    expect(encode([`a\\`, `b\\c\\\\d`])).to.eq(`"a\\\\","b\\\\c\\\\\\\\d"`);
  });
});

describe("decode", () => {
  it("qualify and delimit", () => {
    expect(decode(`"a","b"`)).to.eql([`a`, `b`]);
  });

  it("escape", () => {
    expect(decode(`"a\\"","b\\"c\\"d"`)).to.eql([`a"`, `b"c"d`]);
  });

  it("escaped escape chars", () => {
    expect(decode(`"a\\\\","b\\\\c\\\\\\\\d"`)).to.eql([`a\\`, `b\\c\\\\d`]);
  });

  it("first char is not a qualifier", () => {
    expect(() => decode(`a"`)).to.throw('Expected qualifier, but found "a".');
  });

  it("char after comma is not a qualifier", () => {
    expect(() => decode(`"a",b"`)).to.throw(
      'Expected qualifier, but found "b".'
    );
  });

  it("non-delimiter found after closing qualifier", () => {
    expect(() => decode(`"a"b`)).to.throw(
      'Non-delimiter "b" found after closing delimiter.'
    );
  });
});
