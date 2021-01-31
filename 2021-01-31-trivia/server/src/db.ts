import { Pool } from "pg";

import config from "./config";
import { User } from "./types";

const pool = new Pool(config.db);

export const insertUser = async (user: User) => {
  await pool.query(
    "INSERT INTO user (id, username, passwd) VALUES ($1, $2, $3)",
    [user.id, user.username, user.passwd]
  );
};

export const checkPassword = async (username: string, passwd: string) => {
  const result = await pool.query(
    "SELECT COUNT(*) AS cnt FROM user WHERE username = $1 AND passwd = $2",
    [username, passwd]
  );
  return result.rows[0].cnt === 1;
};
