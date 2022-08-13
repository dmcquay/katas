// Imports the Google Cloud client library
import { PubSub } from "@google-cloud/pubsub";

async function main(
  projectId = "test-project-id",
  topicNameOrId = "my-topic",
  subscriptionName = "my-sub"
) {
  // Instantiates a client
  const pubsub = new PubSub({
    apiEndpoint: "localhost:8085",
    projectId,
  });

  // Creates a subscription on that new topic
  try {
    const topic = await pubsub.topic(topicNameOrId);
    await topic.createSubscription(subscriptionName);
  } catch (err: any) {
    if (err.code === 6) {
      console.log("Subscription already exists. Resuming...");
    } else {
      throw err;
    }
  }

  const subscription = pubsub.subscription(subscriptionName);

  // Receive callbacks for new messages on the subscription
  subscription.on("message", (message: any) => {
    console.log("Received message:", message.data.toString());
    message.ack();
  });

  // Receive callbacks for errors on the subscription
  subscription.on("error", (error: any) => {
    console.error("Received error:", error);
    process.exit(1);
  });
}

main();
