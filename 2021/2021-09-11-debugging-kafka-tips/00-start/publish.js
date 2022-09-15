const { Kafka } = require("kafkajs");

const main = async () => {
  const kafka = new Kafka({
    clientId: "my-app",
    brokers: ["localhost:9092"],
  });

  const producer = kafka.producer();

  await producer.connect();

  await producer.send({
    topic: "posts",
    messages: [
      {
        value: JSON.stringify({
          id: 1,
          content: "Initial content.",
        }),
      },
    ],
  });

  await producer.send({
    topic: "posts",
    messages: [
      {
        value: JSON.stringify({
          id: 1,
          content: "Improved content.",
        }),
      },
    ],
  });

  await producer.disconnect();
};

main();
