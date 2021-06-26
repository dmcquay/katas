const { Kafka } = require("kafkajs");
const { SchemaRegistry } = require("@kafkajs/confluent-schema-registry");

const main = async () => {
  const registry = new SchemaRegistry({ host: "http://localhost:8081" });

  const kafka = new Kafka({
    clientId: "my-app",
    brokers: ["localhost:9092"],
  });

  const consumer = kafka.consumer({ groupId: "test" });

  await consumer.connect();
  await consumer.subscribe({ topic: "users", fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ message }) => {
      const decodedValue = await registry.decode(message.value);
      console.log(decodedValue);
    },
  });
};

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
