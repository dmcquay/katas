import * as dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config();

const getEnvStr = (key: string): string => {
  const val = process.env[key];
  if (val === undefined) {
    throw new Error(`expected env var ${key} to be defined`);
  }
  return val;
};

const uri = getEnvStr("MONGO_URI");

let exitRequested = false;

process.on("SIGINT", () => {
  exitRequested = true;
  console.log("exit requested");
});

const test = async () => {
  const client = new MongoClient(uri, {
    useNewUrlParser: true,

    // useUnifiedTopology: true, // fix by setting this to true
    // or by using v >= 4.x of mongodb lib
  });

  console.log("connecting");
  await client.connect();

  console.log("connected");

  const collection = client.db("default").collection("widgets");

  const result = await collection
    .find()
    .sort({ id: -1 })
    .project({ id: 1 })
    .limit(1)
    .next();
  let id = result.id + 1;

  while (!exitRequested) {
    const doc = {
      createdAt: new Date().toISOString(),
      id: id++,
    };
    await collection.insertOne(doc);
    console.log("inserted ", doc.id);
    const found = await collection.findOne({ id: doc.id });
    console.log("read ", found.id);
    await new Promise((r) => setTimeout(r, 1000));
  }

  console.log("exiting");
  await client.close();
};

const main = async () => {
  try {
    await test();
  } catch (err: any) {
    console.log(err.message);
    process.exit();
  }
};

test();
