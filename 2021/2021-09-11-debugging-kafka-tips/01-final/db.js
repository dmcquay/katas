const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  database: "postgres",
});

const upsertPost = async (post) => {
  await pool.query(
    `
    INSERT INTO posts (id, content, kafka_addresses) VALUES ($1, $2, $3)
    ON CONFLICT (id) DO UPDATE SET 
      content = EXCLUDED.content,
      kafka_addresses = posts.kafka_addresses || EXCLUDED.kafka_addresses
    `,
    [post.id, post.content, post.kafkaAddresses]
  );
};

const closeDbConnections = async () => {
  await pool.end();
};

module.exports = {
  upsertPost,
  closeDbConnections,
};
