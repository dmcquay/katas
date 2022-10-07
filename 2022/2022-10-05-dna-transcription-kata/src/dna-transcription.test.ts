import { expect } from "chai";
import {
  transcribeDna,
  toDna,
  toRna,
  _forTestingOnly,
} from "./dna-transcription";
const { peptidesToShortPeptidesString, rnaToPeptides, dnaToRna } =
  _forTestingOnly;

describe("#dnaToRna", () => {
  it("works", () => {
    expect(dnaToRna(toDna("TTATGCATC"))).to.eql(toRna("GAUGCAUAA"));
  });
});

describe("#rnaToPeptides", () => {
  context("when Met is found in first nucleotide", () => {
    it("returns [Met, Pro]", () => {
      expect(rnaToPeptides(toRna("AUGCCUUGA"))).to.eql(["Met", "Pro"]);
    });
  });

  context("when Met is found in second nucleotide", () => {
    it("returns [Met, Pro]", () => {
      expect(rnaToPeptides(toRna("UAUGCCUUGA"))).to.eql(["Met", "Pro"]);
    });
  });

  context("when Met is found in third nucleotide", () => {
    it("returns [Met, Pro]", () => {
      expect(rnaToPeptides(toRna("GUAUGCCUUGA"))).to.eql(["Met", "Pro"]);
    });
  });

  context("when Met is not found until the fourth nucleotide", () => {
    it("returns []]", () => {
      expect(rnaToPeptides(toRna("UUUAUGCCUUGA"))).to.eql(["Met", "Pro"]);
    });
  });

  context("when Met is not found at all", () => {
    it("returns []]", () => {
      expect(rnaToPeptides(toRna("UGA"))).to.eql([]);
    });
  });

  context("when Stop is not found", () => {
    it("returns []", () => {
      expect(rnaToPeptides(toRna("AUGCCU"))).to.eql([]);
    });
  });

  context("when more nucleotides are found after Stop", () => {
    it("subsequent nucleotides are ignored", () => {
      expect(rnaToPeptides(toRna("AUGCCUUGACCU"))).to.eql(["Met", "Pro"]);
    });
  });
});

describe("#peptidesToShortPeptidesString", () => {
  it("works", () => {
    expect(peptidesToShortPeptidesString(["Met", "Pro"])).to.eql("MP");
  });
});

describe("#transcribeDna", () => {
  it("works", () => {
    const input =
      "AGGACGGGCTAACTCCGCTCGTCACAAAGCGCAATGCAGCTATGGCAGATGTTCATGCCG";
    const output = "MNICHSCIALCDERS";
    expect(transcribeDna(input)).to.equal(output);
  });
});
