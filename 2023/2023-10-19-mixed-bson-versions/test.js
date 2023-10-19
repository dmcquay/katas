const clone0 = require('clone0');
const clone2 = require('clone2');
const bson1 = require('bson1');
const bson4 = require('bson4');

const id1 = new bson1.ObjectId();
const id4 = new bson4.ObjectId();

// works fine with bson1
console.log(JSON.stringify(clone0(id1)));

// but this throws TypeError: Cannot read properties of undefined (reading 'toString')
// console.log(JSON.stringify(clone0(id4)));

// updated version of clone works
console.log(JSON.stringify(clone2(id4)));
