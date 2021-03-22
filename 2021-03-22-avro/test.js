const avro = require("avsc");

const schema = require('./schema-channels.json')
const type = avro.Type.forSchema(schema)

// const data = {kind: 'CAT', name: 'Albert'}
const data = require("./data.json");

// const type = avro.Type.forSchema({
//   type: 'record',
//   fields: [
//     {name: 'kind', type: {type: 'enum', symbols: ['CAT', 'DOG']}},
//     {name: 'name', type: 'string'}
//   ]
// });
 
const buf = type.toBuffer(data);
const val = type.fromBuffer(buf);

console.log(JSON.stringify(val, null, 2));
