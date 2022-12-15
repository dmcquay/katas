const fs = require("fs");
const R = require("ramda");

const dict = fs
  .readFileSync("../../data/words_alpha.txt")
  .toString()
  .split("\r\n");

const wordsWith5Letters = dict.filter((x) => x.length === 5);

const letterCounts = {};
for (const word of wordsWith5Letters) {
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
for (const word of wordsWith5Letters) {
  let score = 0;
  const letters = R.uniq(word.split(""));
  for (const letter of letters) {
    score += letterCounts[letter];
  }
  wordsWithScores.push({ word, score });
}

const sorted = R.reverse(R.sortBy(R.prop("score"), wordsWithScores));

console.log(sorted.slice(0, 10));
