const { getUserById, getPostsByAuthorId, upsertUserSummary } = require("./db");
const { buildUserSummary } = require("./transforms");

const updateUserSummary = async (userId) => {
  const user = await getUserById(userId);
  const posts = await getPostsByAuthorId(userId);
  const userSummary = buildUserSummary(user, posts);
  await upsertUserSummary(userSummary);
};

module.exports = {
  updateUserSummary,
};
