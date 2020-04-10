const { Pool } = require('pg')

const pool = new Pool({
  user: 'app',
  host: 'localhost',
  database: 'test',
  password: 'password',
  port: 5432,
});

module.exports = {
    pool
}