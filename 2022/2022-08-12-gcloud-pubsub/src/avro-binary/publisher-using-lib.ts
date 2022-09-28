// Imports the Google Cloud client library
import { Encodings, PubSub, SchemaTypes } from "@google-cloud/pubsub";
import * as avro from "avro-js"; // had to disable noImplicitAny because I can't find types for this
import * as fs from "fs";
import * as path from "path";
import { build } from "../pubsub";
import { init } from "../pubsub-base";

const projectId = "test-project-id";
const apiEndpoint = "localhost:8085";

async function main() {
  const pubsubBase = await init({ projectId, apiEndpoint });
  const pubsubClient = build(pubsubBase);

  const randNum = Math.floor(Math.random() * 1000);
  await pubsubClient.publishTestTopic1V1(
    {
      name: "Test Name",
      count: randNum,
    },
    "" + randNum
  );
}

main();
