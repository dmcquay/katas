const { Kafka } = require("kafkajs");
const avro = require("avsc");

const main = async () => {
  const type = avro.Type.forSchema({
    type: "record",
    fields: [
      { name: "kind", type: { type: "enum", symbols: ["CAT", "DOG"] } },
      { name: "name", type: "string" },
    ],
  });

  const kafka = new Kafka({
    clientId: "my-app",
    brokers: ["localhost:9092"],
  });

  const producer = kafka.producer();

  await producer.connect();

  const encodedValue = type.toBuffer({ kind: "DOG", name: "Albert" });
  await producer.send({
    topic: "test-topic",
    messages: [{ value: encodedValue }],
  });

  await producer.disconnect();

  const consumer = kafka.consumer({ groupId: "test-group-1" });

  await consumer.connect();
  await consumer.subscribe({ topic: "test-topic", fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ message }) => {
      const decodedValue = type.fromBuffer(message.value);
      console.log(decodedValue);
    },
  });
};

main();
