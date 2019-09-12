"use strict";

function getUniuqeCandyCountIfHalfRemoved(candies) {
  // length of candies is even
  // return the maximum unique types in half the candies

  const seen = {};
  let uniqueCount = 0;
  for (let candy of candies) {
    if (!seen[candy]) uniqueCount++;
    seen[candy] = true;
  }
  return Math.min(uniqueCount, candies.length / 2);
}

function isKPalindrome(word, k) {
  let front = 0;
  let back = word.length - 1;
  let removals = 0;
  while (front <= back) {
    if (word[front] !== word[back]) {
      if (word[front + 1] === word[back]) {
        front++;
      } else {
        back--;
      }
      removals++;
      if (removals > k) return false;
    } else {
      front++;
      back--;
    }
  }
  return true;
}

module.exports = {
  getUniuqeCandyCountIfHalfRemoved,
  isKPalindrome
};
