const clone = require('clone');
const bson1 = require('bson1');
const bson4 = require('bson4');

const id1 = new bson1.ObjectId();
const id4 = new bson4.ObjectId();

// works fine with bson1
console.log(JSON.stringify(clone(id1)));

// but this throws TypeError: Cannot read properties of undefined (reading 'toString')
console.log(JSON.stringify(clone(id4)));
