const { Kafka } = require("kafkajs");
const { SchemaRegistry } = require("@kafkajs/confluent-schema-registry");
const { upsertUser, closeDbConnections } = require("./db");
const { updateUserSummary } = require("./user-summary-agg");

const main = async () => {
  const registry = new SchemaRegistry({ host: "http://localhost:8081" });

  const kafka = new Kafka({
    clientId: "my-app",
    brokers: ["localhost:9092"],
  });

  const consumer = kafka.consumer({ groupId: "test-users" });

  await consumer.connect();
  await consumer.subscribe({ topic: "users", fromBeginning: true });

  const shutdown = async () => {
    await consumer.disconnect();
    await closeDbConnections();
  };

  process.on("SIGINT", shutdown);
  process.on("SIGHUP", shutdown);

  await consumer.run({
    eachMessage: async ({ message }) => {
      const user = await registry.decode(message.value);
      await upsertUser(user);
      await updateUserSummary(user.id);
      console.log(user);
    },
  });
};

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
