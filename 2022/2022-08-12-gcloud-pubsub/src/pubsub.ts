import { PubsubClient } from "./pubsub-base";
import * as topics from "./topics";

export const build = (pubsub: PubsubClient) => {
  return {
    publishTestTopic1V1: pubsub.publish<topics.TestTopic1V1Message>(
      topics.TestTopic1V1TopicName
    ),
    publishTestTopic2V1: pubsub.publish<topics.TestTopic2V1Message>(
      topics.TestTopic2V1TopicName
    ),
  };
};
