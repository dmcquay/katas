// Initialize the replica set
rs.initiate({
    _id: 'rs0',
    members: [
        { _id: 0, host: 'localhost:27017' }
        // Add more members here if you want to set up additional nodes
    ]
});

// Use admin then create user root
var adminDB = db.getSiblingDB('admin');
adminDB.createUser({
    user: 'superuser',
    pwd: 'superuser',
    roles: [{ role: 'root', db: 'admin' }]
});

// Authenticate as the root user
adminDB.auth('superuser', 'superuser');

var dbName = 'sample';
// Create a new user in the target database
adminDB.createUser({
    user: 'sample',
    pwd: 'sample',
    roles: [{ role: 'readWrite', db: dbName }]
});
