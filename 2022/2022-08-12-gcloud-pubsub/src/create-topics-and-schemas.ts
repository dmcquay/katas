import * as fs from "fs";
import * as path from "path";
import { avroToTypeScript, RecordType } from "avro-typescript";
import { Encodings, PubSub, SchemaTypes } from "@google-cloud/pubsub";

const projectId = "test-project-id";

const main = async () => {
  const files = fs.readdirSync(path.join(__dirname, "..", "schemas"));

  let allTypes = "";
  let first = true;

  const pubsub = new PubSub({
    apiEndpoint: "localhost:8085",
    projectId,
  });

  for (let file of files) {
    const schemaText = fs.readFileSync(
      path.join(__dirname, "..", "schemas", file),
      "utf-8"
    );

    const schema = JSON.parse(schemaText) as RecordType;

    console.log(schema.name);

    try {
      await pubsub.createSchema(schema.name, SchemaTypes.Avro, schemaText);
      console.log("  Created schema");
    } catch (err: any) {
      if (err.code === 6) {
        console.log("  Schema already exists");
      } else {
        throw err;
      }
    }

    try {
      await pubsub.createTopic({
        name: schema.name,
        schemaSettings: {
          schema: `projects/${projectId}/schemas/${schema.name}`,
          encoding: Encodings.Binary,
        },
      });
      console.log("  Created topic");
    } catch (err: any) {
      if (err.code === 6) {
        console.log("  Topic already exists");
      } else {
        throw err;
      }
    }
  }

  await pubsub.close();

  console.log("Done");
};

main();
