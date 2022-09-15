const slonik = require('slonik');

const slonikPool = slonik.createPool('postgres://postgres@localhost/postgres');

(async function() {
  let result;

  result = await slonikPool.query(slonik.sql`SELECT 1`);
  // console.log(result);

  result = await slonikPool.query(slonik.sql`CREATE TABLE IF NOT EXISTS test (id SERIAL, content TEXT NOT NULL)`);
  // console.log(result);

  result = await slonikPool.query(slonik.sql`INSERT INTO test (content) VALUES ('content 1')`);
  
  // const content = 'test content from variable';
  // slonik generates an error when you try to do this:
  // result = await pool.query(slonik.sql`INSERT INTO test (content) VALUES ('${content}')`);
  // also this because all queries must be constructed using the slonik.sql tagged template literal
  // result = await pool.query(`INSERT INTO test (content) VALUES ('${content}')`);
  // result = await slonikPool.query(slonik.sql`INSERT INTO test (content) VALUES ($1)`, [content]);

  // Emily sent this over. It works and is the correct slonik way to do it.
  /*
  const insertStr = slonik.sql`
    INSERT INTO dvs_criterion_ref_user_score_report
      (user_handle, plan_id)
    SELECT *
    FROM ${slonik.sql.unnest(
      [['6d9b47d0-2b3c-4226-9b17-ff1059b8fb2d', '1800contacts']],
      ['uuid', 'text']
    )}
  */

  // result = await slonikPool.query(slonik.sql`SELECT * FROM test`);
  // console.log(result);
  
  slonikPool.end();
})()