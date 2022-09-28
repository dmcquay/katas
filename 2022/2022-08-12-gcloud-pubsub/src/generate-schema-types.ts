import * as fs from "fs";
import * as path from "path";
import { avroToTypeScript, RecordType } from "avro-typescript";

const main = async () => {
  const files = fs.readdirSync(path.join(__dirname, "..", "schemas"));

  let allTypes = "";
  let first = true;

  for (let file of files) {
    const schemaText = fs.readFileSync(
      path.join(__dirname, "..", "schemas", file),
      "utf-8"
    );

    const schema = JSON.parse(schemaText) as RecordType;
    if (first) {
      first = false;
    } else {
      allTypes += "\n";
    }
    let generatedType = avroToTypeScript(schema as RecordType);
    generatedType = generatedType.replace(schema.name, schema.name + "Message");
    allTypes += generatedType;
    allTypes += `\nexport const ${schema.name}TopicName = "${schema.name}";\n`;
  }

  fs.writeFileSync(path.join(__dirname, "topics.ts"), allTypes);
};

main();
