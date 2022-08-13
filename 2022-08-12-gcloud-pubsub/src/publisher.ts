// Imports the Google Cloud client library
import { PubSub } from "@google-cloud/pubsub";

async function main(projectId = "test-project-id", topicNameOrId = "my-topic") {
  // Instantiates a client
  const pubsub = new PubSub({
    apiEndpoint: "localhost:8085",
    projectId,
  });

  try {
    await pubsub.createTopic(topicNameOrId);
  } catch (err: any) {
    if (err.code === 6) {
      console.log("Topic already exists");
    } else {
      throw err;
    }
  }

  const topic = await pubsub.topic(topicNameOrId);

  // Send a message to the topic
  topic.publishMessage({
    json: {
      hello: "world",
    },
  });
}

main();
