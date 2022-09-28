// Imports the Google Cloud client library
import { ISchema, PubSub } from "@google-cloud/pubsub";

async function main(projectId = "test-project-id", topicNameOrId = "my-topic") {
  const pubsub = new PubSub({
    apiEndpoint: "localhost:8085",
    projectId,
  });

  const topics = await pubsub.getTopics();
  const schemasIter = await pubsub.listSchemas();
  const schemas: ISchema[] = [];
  for await (const s of pubsub.listSchemas()) {
    schemas.push(s);
  }
  console.log({ topics, schemas });
}

main();
