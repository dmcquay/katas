const {pool} = require('./database-service')

async function GetAllOrders() {
    const results = await pool.query('SELECT * FROM "order"')
    return results.rows
};

// assumption: 1000 orders currently. want to plan for 10x.
async function GetAvgOrderAmountByDay() {
  // ROUND(AVG(amount_cents))
  const results = await pool.query(`
  SELECT CAST(ROUND(AVG(amount_cents)) AS INT) AS "averageOrderAmount", DATE_PART('dow', created_at) AS "dayOfWeek" FROM "order"
  GROUP BY DATE_PART('dow', created_at)`)
  console.log(results.rows)
  return results.rows
  // const dayofWeek = results.rows 

  // 0 => sunday
  // 1 => monday
  // 4 => thursday
  // 5 => friday
}

module.exports = {
 GetAllOrders,
 GetAvgOrderAmountByDay
}