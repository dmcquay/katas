import { expect } from "chai";
import {
  Location,
  boardToLocations,
  findSurroundingLocations,
  solve,
} from "./boggle";

describe("#findSurroundingLocations", () => {
  it("top left", () => {
    const board = [
      ["00", "01"],
      ["10", "11"],
    ];
    const locs = findSurroundingLocations(board, { row: 0, col: 0 });
    const expected: Location[] = [
      { row: 0, col: 1 },
      { row: 1, col: 0 },
      { row: 1, col: 1 },
    ];
    expect(locs).to.eql(expected);
  });

  it("bottom right", () => {
    const board = [
      ["00", "01"],
      ["10", "11"],
    ];
    const locs = findSurroundingLocations(board, { row: 1, col: 1 });
    const expected: Location[] = [
      { row: 0, col: 0 },
      { row: 0, col: 1 },
      { row: 1, col: 0 },
    ];
    expect(locs).to.eql(expected);
  });
});

describe("#boardToLocations", () => {
  it("works", () => {
    const locs = boardToLocations([
      ["a", "b", "c"],
      ["d", "e", "f"],
    ]);
    const expected: Location[] = [
      { row: 0, col: 0 },
      { row: 0, col: 1 },
      { row: 0, col: 2 },
      { row: 1, col: 0 },
      { row: 1, col: 1 },
      { row: 1, col: 2 },
    ];
    expect(locs).to.eql(expected);
  });
});

describe("#solve", () => {
  it("horizontal forward match", () => {
    const dictionary = ["one"];
    const board = [["o", "n", "e", "z"]];
    expect(solve(dictionary, board)).to.eql([
      {
        word: "one",
        locations: [
          { row: 0, col: 0 },
          { row: 0, col: 1 },
          { row: 0, col: 2 },
        ],
      },
    ]);
  });

  it("horizontal backward match", () => {
    const dictionary = ["one"];
    const board = [["e", "n", "o", "z"]];
    expect(solve(dictionary, board)).to.eql([
      {
        word: "one",
        locations: [
          { row: 0, col: 2 },
          { row: 0, col: 1 },
          { row: 0, col: 0 },
        ],
      },
    ]);
  });

  it("vertical down match", () => {
    const dictionary = ["gko"];
    const board = [
      ["a", "b", "c", "d"],
      ["e", "f", "g", "h"],
      ["i", "j", "k", "l"],
      ["m", "n", "o", "p"],
    ];
    expect(solve(dictionary, board)).to.eql([
      {
        word: "gko",
        locations: [
          { row: 1, col: 2 },
          { row: 2, col: 2 },
          { row: 3, col: 2 },
        ],
      },
    ]);
  });

  it("vertical up match", () => {
    const dictionary = ["okg"];
    const board = [
      ["a", "b", "c", "d"],
      ["e", "f", "g", "h"],
      ["i", "j", "k", "l"],
      ["m", "n", "o", "p"],
    ];
    expect(solve(dictionary, board)).to.eql([
      {
        word: "okg",
        locations: [
          { row: 3, col: 2 },
          { row: 2, col: 2 },
          { row: 1, col: 2 },
        ],
      },
    ]);
  });

  it("diagonal match", () => {
    const dictionary = ["fkp"];
    const board = [
      ["a", "b", "c", "d"],
      ["e", "f", "g", "h"],
      ["i", "j", "k", "l"],
      ["m", "n", "o", "p"],
    ];
    expect(solve(dictionary, board)).to.eql([
      {
        word: "fkp",
        locations: [
          { row: 1, col: 1 },
          { row: 2, col: 2 },
          { row: 3, col: 3 },
        ],
      },
    ]);
  });

  it("snake match", () => {
    const dictionary = ["hlkgb"];
    const board = [
      ["a", "b", "c", "d"],
      ["e", "f", "g", "h"],
      ["i", "j", "k", "l"],
      ["m", "n", "o", "p"],
    ];
    expect(solve(dictionary, board)).to.eql([
      {
        word: "hlkgb",
        locations: [
          { row: 1, col: 3 },
          { row: 2, col: 3 },
          { row: 2, col: 2 },
          { row: 1, col: 2 },
          { row: 0, col: 1 },
        ],
      },
    ]);
  });

  it("multi match", () => {
    const dictionary = ["abc", "efg"];
    const board = [
      ["a", "b", "c", "d"],
      ["e", "f", "g", "h"],
      ["i", "j", "k", "l"],
      ["m", "n", "o", "p"],
    ];
    expect(solve(dictionary, board)).to.eql([
      {
        word: "abc",
        locations: [
          { row: 0, col: 0 },
          { row: 0, col: 1 },
          { row: 0, col: 2 },
        ],
      },
      {
        word: "efg",
        locations: [
          { row: 1, col: 0 },
          { row: 1, col: 1 },
          { row: 1, col: 2 },
        ],
      },
    ]);
  });

  it("multi match (same word)", () => {
    const dictionary = ["abc"];
    const board = [
      ["a", "b", "c", "z"],
      ["z", "z", "z", "z"],
      ["a", "b", "c", "z"],
    ];
    expect(solve(dictionary, board)).to.eql([
      {
        word: "abc",
        locations: [
          { row: 0, col: 0 },
          { row: 0, col: 1 },
          { row: 0, col: 2 },
        ],
      },
      {
        word: "abc",
        locations: [
          { row: 2, col: 0 },
          { row: 2, col: 1 },
          { row: 2, col: 2 },
        ],
      },
    ]);
  });

  it("multi match (same word, branching)", () => {
    const dictionary = ["abc"];
    const board = [
      ["a", "b", "c", "z"],
      ["z", "c", "z", "z"],
    ];
    expect(solve(dictionary, board)).to.eql([
      {
        word: "abc",
        locations: [
          { row: 0, col: 0 },
          { row: 0, col: 1 },
          { row: 0, col: 2 },
        ],
      },
      {
        word: "abc",
        locations: [
          { row: 0, col: 0 },
          { row: 0, col: 1 },
          { row: 1, col: 1 },
        ],
      },
    ]);
  });

  it("partial match ignored", () => {
    const dictionary = ["abc"];
    const board = [["a", "b"]];
    expect(solve(dictionary, board)).to.eql([]);
  });

  it("no duplicate locations", () => {
    const dictionary = ["aba"];
    const board = [
      ["z", "z", "z", "z"],
      ["z", "z", "a", "z"],
      ["z", "z", "b", "z"],
      ["z", "z", "z", "z"],
    ];
    expect(solve(dictionary, board)).to.eql([]);
  });

  // TODO: opportunity to optimize this
  it("performance of large dictionary and typical board size is satisfactory", () => {
    const lettersExceptABC = "defghijklmnopqrstuvwxyz";

    const dictionary: string[] = [];

    outerLoop: for (let i1 = 0; i1 < lettersExceptABC.length; i1++) {
      for (let i2 = 0; i2 < lettersExceptABC.length; i2++) {
        for (let i3 = 0; i3 < lettersExceptABC.length; i3++) {
          for (let i4 = 0; i4 < lettersExceptABC.length; i4++) {
            // flank word with "b" and "c" to prevent palindromes
            dictionary.push(
              [
                "b",
                lettersExceptABC[i1],
                lettersExceptABC[i2],
                lettersExceptABC[i3],
                lettersExceptABC[i4],
                "c",
              ].join("")
            );
            if (dictionary.length >= 1_000_000) break outerLoop;
          }
        }
      }
    }

    const word = dictionary[dictionary.length - 1];

    const board = [
      ["a", "a", "a", "a", "a", "a"],
      ["a", "a", "a", "a", "a", "a"],
      word.split(""),
      ["a", "a", "a", "a", "a", "a"],
    ];

    expect(solve(dictionary, board)).to.eql([
      {
        word,
        locations: [
          { row: 2, col: 0 },
          { row: 2, col: 1 },
          { row: 2, col: 2 },
          { row: 2, col: 3 },
          { row: 2, col: 4 },
          { row: 2, col: 5 },
        ],
      },
    ]);
  });
});
