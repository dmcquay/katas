const buildUserSummary = (user, posts) => {
  const words = posts.flatMap((post) => post.content.split(" "));
  const wordCounts = words.reduce((wordCounts, word) => {
    wordCounts[word] =
      wordCounts[word] === undefined ? 1 : wordCounts[word] + 1;
    return wordCounts;
  }, {});
  const wordCountEntries = Object.entries(wordCounts);
  wordCountEntries.sort((a, b) => b[1] - a[1]);
  const favoriteWords = wordCountEntries.slice(0, 5).map((x) => x[0]);
  return {
    userId: user.id,
    favoriteWords,
    postCount: posts.length,
  };
};

module.exports = {
  buildUserSummary,
};
