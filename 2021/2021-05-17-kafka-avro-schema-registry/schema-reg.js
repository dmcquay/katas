const {
  SchemaRegistry,
  SchemaType,
} = require("@kafkajs/confluent-schema-registry");

const main = async () => {
  const registry = new SchemaRegistry({ host: "http://localhost:8081" });

  // Upload a schema to the registry
  const schema = {
    type: "record",
    name: "RandomTest4",
    namespace: "examples",
    fields: [
      { type: "string", name: "fullName" },
      {
        name: "kind",
        type: { type: "enum", name: "catDogEnum", symbols: ["CAT", "DOG"] },
      },
    ],
  };
  const { id } = await registry.register({
    type: SchemaType.AVRO,
    schema: JSON.stringify(schema),
  });

  // Encode using the uploaded schema
  const payload = { fullName: "John Doe", kind: "CAT" };
  const encodedPayload = await registry.encode(id, payload);

  // Decode the payload
  const decodedPayload = await registry.decode(encodedPayload);
  console.log({ schemaId: id, encodedPayload, decodedPayload });
};

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
