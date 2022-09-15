const { Kafka } = require("kafkajs");
const {
  SchemaRegistry,
  SchemaType,
} = require("@kafkajs/confluent-schema-registry");
const { generateUser, generatePost } = require("./test-data");

const publishTestRecords = ({ schema, generateEntity, topic }) => {
  let interrupted = false;

  const interrupt = () => {
    interrupted = true;
  };

  process.on("SIGINT", interrupt);
  process.on("SIGHUP", interrupt);

  const main = async () => {
    const registry = new SchemaRegistry({ host: "http://localhost:8081" });

    const { id } = await registry.register({
      type: SchemaType.AVRO,
      schema: JSON.stringify(schema),
    });

    const kafka = new Kafka({
      clientId: "my-app",
      brokers: ["localhost:9092"],
    });

    const producer = kafka.producer();

    await producer.connect();

    while (!interrupted) {
      const payload = generateEntity();
      console.log(`publishing to ${topic}`, payload);
      const encodedValue = await registry.encode(id, payload);
      await producer.send({
        topic,
        messages: [{ value: encodedValue }],
      });
      await new Promise((resolve) => setTimeout(resolve, Math.random() * 5000));
    }

    await producer.disconnect();
  };

  main().catch((e) => {
    console.error(e);
    process.exit(1);
  });
};

const userSchema = {
  type: "record",
  name: "User",
  namespace: "examples",
  fields: [
    { type: "int", name: "id" },
    { type: "string", name: "name" },
  ],
};

publishTestRecords({
  generateEntity: generateUser,
  schema: userSchema,
  topic: "users",
});

const postSchema = {
  type: "record",
  name: "Post",
  namespace: "examples",
  fields: [
    { type: "int", name: "id" },
    { type: "int", name: "authorId" },
    { type: "string", name: "content" },
  ],
};

publishTestRecords({
  generateEntity: generatePost,
  schema: postSchema,
  topic: "posts",
});
