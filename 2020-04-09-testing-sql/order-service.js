const {pool} = require('./database-service')

async function GetAllOrders() {
    const results = await pool.query('SELECT * FROM "order"')
    return results.rows
};

async function 

module.exports = {
 GetAllOrders
}