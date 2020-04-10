const {pool} = require('./database-service')

after(() => {
    pool.end()
})