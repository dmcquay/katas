const fs = require('fs');

const db = require('./db');

(async function() {
    const sql = fs.readFileSync('schema.sql').toString();
    
    const dropFailable = await db.query({sql: 'DROP TABLE if exists upvote;'})
    if (!dropFailable.success) {
        console.log(dropFailable);
        process.exit(1);
    }
    
    const createFailable = await db.query({sql});
    if (!createFailable.success) {
        console.log(createFailable);
        process.exit(1);
    }

    db.close();
})();