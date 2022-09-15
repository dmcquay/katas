const { Pool } = require("pg");

require('./config');
const { success, failure } = require("./failable");

const pool = new Pool();

pool.query.bind(pool);

async function query({sql, params}) {
  const meta = {command: {type: 'db.query', sql, params}};
  try {
    const result = await pool.query(sql, params);
    return success(result, meta);
  } catch (err) {
    return failure(err, meta);
  }
}

const close = pool.end.bind(pool)

module.exports = {
  query,
  close
};
