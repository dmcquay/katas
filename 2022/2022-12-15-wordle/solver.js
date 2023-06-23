const fs = require("fs");
const R = require("ramda");

const dict = fs
  .readFileSync("../../data/words_alpha.txt")
  .toString()
  .split("\r\n");

const wordsWith5Letters = dict.filter((x) => x.length === 5);

const easyTypeHints = ["sNwNaYmNpN", "bNeNaYcNhN", "gNiNaYnNtN"];

const hintTypeMap = {
  N: "no match",
  Y: "exact",
  "?": "wrong position",
};

const hints = [];
for (const easyTypeHint of easyTypeHints) {
  let position = 0;
  const hintLetters = easyTypeHint.split("");
  while (hintLetters.length > 1) {
    const letter = hintLetters.shift();
    const typeCode = hintLetters.shift();
    const type = hintTypeMap[typeCode];
    hints.push({
      letter,
      type,
      position,
    });
    position++;
  }
}

const matches = wordsWith5Letters.filter((word) => {
  for (const hint of hints) {
    if (hint.type === "exact") {
      if (word[hint.position] !== hint.letter) {
        return false;
      }
    } else if (hint.type === "wrong position") {
      if (word.indexOf(hint.letter) === -1) {
        return false;
      }
      if (word[hint.position] === hint.letter) {
        return false;
      }
    } else if (hint.type === "no match") {
      if (word.indexOf(hint.letter) !== -1) {
        return false;
      }
    } else {
      console.error(`Invalid hint type: ${JSON.stringify(hint)}`);
    }
  }
  return true;
});

const letterCounts = {};
for (const word of matches) {
  const letters = R.uniq(word.split(""));
  for (const letter of letters) {
    if (letterCounts[letter] == null) {
      letterCounts[letter] = 1;
    } else {
      letterCounts[letter]++;
    }
  }
}

const wordsWithScores = [];
for (const word of matches) {
  let score = 0;
  const letters = R.uniq(word.split(""));
  for (const letter of letters) {
    score += letterCounts[letter];
  }
  wordsWithScores.push({ word, score });
}

let sorted = R.reverse(R.sortBy(R.prop("score"), wordsWithScores));

sorted = sorted.filter((x) => {
  const matches = x.word.match(/a/g);
  return matches != null && matches.length >= 2;
});

// console.log(sorted.slice(0, 50));
console.log(sorted.length);
