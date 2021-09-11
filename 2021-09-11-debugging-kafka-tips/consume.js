const { Kafka } = require("kafkajs");
const { upsertPost, closeDbConnections } = require("./db");

const main = async () => {
  const kafka = new Kafka({
    clientId: "my-app",
    brokers: ["localhost:9092"],
  });

  const consumer = kafka.consumer({ groupId: "posts-consumer-1" });

  await consumer.connect();
  await consumer.subscribe({ topic: "posts", fromBeginning: true });

  const shutdown = async () => {
    await consumer.disconnect();
    await closeDbConnections();
  };

  process.on("SIGINT", shutdown);
  process.on("SIGHUP", shutdown);

  await consumer.run({
    eachMessage: async ({ message, partition }) => {
      const post = await JSON.parse(message.value.toString());
      await upsertPost({
        ...post,
        kafkaAddresses: [`${partition}:${message.offset}`],
      });
      console.log(post);
    },
  });
};

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
