const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  database: "postgres",
});

const upsertPost = async (post) => {
  await pool.query(
    `
    INSERT INTO posts (id, content) VALUES ($1, $2)
    ON CONFLICT (id) DO UPDATE SET
      content = EXCLUDED.content
    `,
    [post.id, post.content]
  );
};

const closeDbConnections = async () => {
  await pool.end();
};

module.exports = {
  upsertPost,
  closeDbConnections,
};
