// Imports the Google Cloud client library
import { Encodings, PubSub, SchemaTypes } from "@google-cloud/pubsub";
import * as avro from "avro-js"; // had to disable noImplicitAny because I can't find types for this
import * as fs from "fs";
import * as path from "path";
import * as topics from "../topics";

const schemaDefinition = fs
  .readFileSync(
    path.join(__dirname, "..", "..", "schemas", "TestTopic1V1.avsc")
  )
  .toString();

async function main(projectId = "test-project-id", topicName = "TestTopic1V1") {
  // Instantiates a client
  const pubsub = new PubSub({
    apiEndpoint: "localhost:8085",
    projectId,
  });

  try {
    console.log("Creating schema");
    const schemaResp = await pubsub.createSchema(
      topicName,
      SchemaTypes.Avro,
      schemaDefinition
    );
    console.log("Done creating schema");
    console.log({ schemaResp });
  } catch (err: any) {
    if (err.code === 6) {
      console.log("Schema already exists");
    } else {
      throw err;
    }
  }

  try {
    console.log("Creating topic");
    await pubsub.createTopic({
      name: topicName,
      schemaSettings: {
        schema: `projects/test-project-id/schemas/${topicName}`,
        encoding: Encodings.Binary,
      },
    });
    console.log("Done creating topic");
  } catch (err: any) {
    if (err.code === 6) {
      console.log("Topic already exists");
    } else {
      throw err;
    }
  }

  const topic = pubsub.topic(topicName);

  const type = avro.parse(schemaDefinition);

  const message: topics.TestTopic1V1Message = {
    name: "Test Name",
    count: 34,
  };

  const dataBuffer = type.toBuffer(message);

  const parsedMessage = type.fromBuffer(dataBuffer);

  console.log({ parsedMessage });

  // Send a message to the topic
  await topic.publishMessage({
    data: dataBuffer,
    orderingKey: message.name, // optional, but seems like a good idea
  });
}

main();
