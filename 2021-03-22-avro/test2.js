const { readAVSCAsync, SchemaRegistry } = require("@kafkajs/confluent-schema-registry");

// const schema = require('./schema-channels.json')
const data = require("./data.json");

const main = async () => {
  const registry = new SchemaRegistry({ host: "http://localhost:8081" });

  const schema = await readAVSCAsync('./schema-channels.avsc')

  // Upload a schema to the registry
  const { id } = await registry.register(schema, {
    subject: 'my-test-subject'
  })

  // Encode using the uploaded schema
  // const data = {kind: 'CAT', name: 'Albert'}

  const encodedPayload = await registry.encode(id, data);

  // Decode the payload
  const decodedPayload = await registry.decode(encodedPayload);

  console.log(JSON.stringify(decodedPayload, null, 2));
};

main();
