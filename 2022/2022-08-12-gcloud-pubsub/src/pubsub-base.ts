import { PubSub, SchemaTypes } from "@google-cloud/pubsub";
import * as avro from "avro-js"; // had to disable noImplicitAny because I can't find types for this
import * as fs from "fs";
import * as path from "path";

export interface PubsubConfig {
  apiEndpoint: string;
  projectId: string;
}

export interface PubsubClient {
  publish: <T>(
    topicName: string
  ) => (message: any, orderingKey: string) => Promise<void>;
}

export const init = async ({
  apiEndpoint,
  projectId,
}: PubsubConfig): Promise<PubsubClient> => {
  const pubsub = new PubSub({
    apiEndpoint,
    projectId,
  });

  const publish =
    <T>(topicName: string) =>
    async (message: any, orderingKey: string) => {
      const topic = pubsub.topic(topicName);
      const schemaDefinition = fs
        .readFileSync(
          path.join(__dirname, "..", "schemas", `${topicName}.avsc`)
        )
        .toString();
      const type = avro.parse(schemaDefinition);
      const dataBuffer = type.toBuffer(message);
      await topic.publishMessage({
        data: dataBuffer,
        orderingKey,
      });
    };

  return {
    publish,
  };
};
